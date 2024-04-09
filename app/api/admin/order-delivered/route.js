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

// Route to update the delivered status of an order
export async function PUT(request) {
    try {
        // Check admin authentication
        const token = request.headers.get('authorization');

        if (!token) {
            return NextResponse.json({
                success: false,
                message: "Token is missing",
            }, { status: 401 });
        }

        const jwtSecretKey = process.env.JWT_SECRET_KEY;

        const decoded = jwt.verify(token, jwtSecretKey);

        // Set User Id
        const userId = decoded.userId;

        // Retrieve user information
        const [user] = await db.query('SELECT * FROM Users WHERE id = ?', [userId]);

        // Check if the user or not
        if (user.length == 0) {
            return NextResponse.json({
                success: false,
                error: "There is no user with this email.",
            }, { status: 403 });
        }

        // Check if the user is admin or not
        if (!user[0].is_admin) {
            return NextResponse.json({
                success: false,
                error: "You do not have permission to perform this action.",
            }, { status: 403 });
        }

        const { orderId, newDeliveredStatus } = await request.json();

        // Update the delivered status and updatedAt column
        const now = new Date();
        const [order] = await db.query('UPDATE Orders SET delivered = ?, updatedAt = ? WHERE id = ?', [newDeliveredStatus, now, orderId]);


        if (order.length === 0) {
            return NextResponse.json({
                success: false,
                error: "Order not found",
            }, { status: 404 });
        }

        // Update the delivered status
        await db.query('UPDATE Orders SET delivered = ? WHERE id = ?', [newDeliveredStatus, orderId]);

        return NextResponse.json({
            success: true,
            message: "Delivered status updated successfully",
            data: {
                delivered: newDeliveredStatus,
            },
        }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}
