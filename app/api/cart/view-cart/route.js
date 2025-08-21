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

export async function GET(request) {
    try {
        // Verify token and extract user ID
        const token = request.headers.get('authorization');
        const jwtSecretKey = process.env.JWT_SECRET_KEY;
        const decoded = jwt.verify(token, jwtSecretKey);
        const userId = decoded.userId;

        // Retrieve cart items for the user
        const [cartItems] = await db.query(`
            SELECT CartItems.*, Services.name, Services.image_url, Services.description, Services.price
            FROM CartItems
            INNER JOIN Services ON CartItems.service_id = Services.id
            WHERE CartItems.user_id = ?
        `, [userId]);

        return NextResponse.json({
            success: true,
            data: cartItems,
        }, {
            status: 200,
            headers: {
                "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
                "Pragma": "no-cache",
                "Expires": "0"
            }
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}

