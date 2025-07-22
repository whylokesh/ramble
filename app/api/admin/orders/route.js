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

// Route to get all orders with total_amount and user details
export async function GET(request) {
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

        // Get all orders with user details
        const [orders] = await db.query(`
            SELECT Orders.id AS orderId, Orders.total_amount AS totalAmount, Orders.delivered,
                   Users.id AS userId, Users.full_name AS username, Users.email, Users.phone_number AS phoneNumber
            FROM Orders
            INNER JOIN Users ON Orders.user_id = Users.id
        `);

        const formattedOrders = orders.map((order) => {
            return {
                orderId: order.orderId,
                totalAmount: order.totalAmount,
                delivered: order.delivered,
                user: {
                    id: order.userId,
                    username: order.username,
                    email: order.email,
                    phoneNumber: order.phoneNumber,
                },
            };
        });

        const response = NextResponse.json({
            success: true,
            data: formattedOrders,
        }, { status: 200 });
        response.headers.set('Cache-Control', 'no-store');
        return response;
    } catch (error) {
        console.error(error);
        const response = NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
        response.headers.set('Cache-Control', 'no-store');
        return response;
    }
}
