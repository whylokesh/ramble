// pages/api/place-order.js

import jwt from 'jsonwebtoken';
import mysql from 'mysql2/promise';
import { NextResponse } from "next/server";
require('dotenv').config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

export async function POST(request) {
    try {
        // Verify token and extract user ID
        const token = request.headers.get('authorization');
        const jwtSecretKey = process.env.JWT_SECRET_KEY;
        const decoded = jwt.verify(token, jwtSecretKey);
        const userId = decoded.userId;

        // Retrieve cart items for the user
        const [cartItems] = await db.query(`
            SELECT ci.*, s.*
            FROM CartItems ci
            JOIN Services s ON ci.service_id = s.id
            WHERE ci.user_id = ?
        `, [userId]);


        if (cartItems.length === 0) {
            return NextResponse.json({
                success: false,
                error: "Cart is empty. Add items to the cart before placing an order.",
            }, { status: 400 });
        }

        // Create a new order
        const totalAmount = calculateTotalAmount(cartItems);
        const [newOrder] = await db.query('INSERT INTO Orders (user_id, total_amount, createdAt, updatedAt) VALUES (?, ?, NOW(), NOW())', [userId, totalAmount]);

        // Transfer cart items to order history
        await Promise.all(
            cartItems.map(async (cartItem) => {
                await db.query('INSERT INTO OrderItems (order_id, service_id, quantity, price, createdAt, updatedAt) VALUES (?, ?, ?, ?, NOW(), NOW())', [newOrder.insertId, cartItem.service_id, cartItem.quantity, cartItem.price]);
            })
        );

        await db.query('DELETE FROM CartItems WHERE user_id = ?', [userId]);

        return NextResponse.json({
            success: true,
            message: "Order placed successfully.",
        }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}

// Helper function to calculate total amount from cart items
const calculateTotalAmount = (cartItems) => {
    return cartItems.reduce((total, cartItem) => {
        return total + cartItem.quantity * cartItem.price;
    }, 0);
};
