import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import mysql from 'mysql2/promise';
require('dotenv').config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Route to add an item to the cart
export async function POST(request) {
    try {
        // Verify token and extract user ID
        const token = request.headers.get('authorization');
        const jwtSecretKey = process.env.JWT_SECRET_KEY;
        const decoded = jwt.verify(token, jwtSecretKey);
        const userId = decoded.userId;

        // Retrieve serviceId and quantity from request body
        const { serviceId, quantity } = await request.json();

        // Check if the service exists
        const [service] = await db.query('SELECT * FROM Services WHERE id = ?', [serviceId]);
        if (service.length === 0) {
            return NextResponse.json({
                success: false,
                error: "Service not found.",
            }, { status: 404 });
        }

        // Check if the user already has the service in the cart
        const [existingCartItem] = await db.query('SELECT * FROM CartItems WHERE user_id = ? AND service_id = ?', [userId, serviceId]);
        const now = new Date();

        if (existingCartItem.length > 0) {
            // Update quantity if the item is already in the cart
            const updatedQuantity = existingCartItem[0].quantity + quantity;
            await db.query('UPDATE CartItems SET quantity = ?, updatedAt = ? WHERE id = ?', [updatedQuantity, now, existingCartItem[0].id]);
        } else {
            // Create a new cart item
            await db.query('INSERT INTO CartItems (user_id, service_id, quantity, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)', [userId, serviceId, quantity, now, now]);
        }

        return NextResponse.json({
            success: true,
            message: "Item added to the cart successfully.",
        }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}
