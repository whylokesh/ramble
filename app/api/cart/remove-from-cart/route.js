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

export async function DELETE(request) {
    try {
        // Verify token and extract user ID
        const token = request.headers.get('authorization');
        const jwtSecretKey = process.env.JWT_SECRET_KEY;
        const decoded = jwt.verify(token, jwtSecretKey);
        const userId = decoded.userId;

        const { searchParams } = new URL(request.url);
        const itemId = searchParams.get('id')

        // Check if the cart item exists
        const [cartItem] = await db.query('SELECT * FROM CartItems WHERE id = ?', [itemId]);

        if (cartItem.length === 0) {
            return NextResponse.json({
                success: false,
                error: "Cart item not found.",
            }, { status: 404 });
        }

        // Check if the cart item belongs to the authenticated user
        if (cartItem[0].user_id !== userId) {
            return NextResponse.json({
                success: false,
                error: "You do not have permission to remove this item from the cart.",
            }, { status: 403 });
        }

        // Remove the cart item
        await db.query('DELETE FROM CartItems WHERE id = ?', [itemId]);

        return NextResponse.json({
            success: true,
            message: "Item removed from the cart successfully.",
        }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}
