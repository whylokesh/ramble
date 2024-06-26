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

// Route to get services and quantities for a specific order
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

        const { searchParams } = new URL(request.url);
        const orderId = searchParams.get('id')

        // Get order details with services, quantities, and user information
        const [order] = await db.query(`
            SELECT Orders.id AS orderId, Orders.total_amount AS totalAmount, Orders.delivered,
                   OrderItems.quantity, Services.id AS serviceId, Services.name AS serviceName,
                   Users.email, Users.full_name
            FROM Orders
            INNER JOIN OrderItems ON Orders.id = OrderItems.order_id
            INNER JOIN Services ON OrderItems.service_id = Services.id
            INNER JOIN Users ON Orders.user_id = Users.id
            WHERE Orders.id = ?
        `, [orderId]);

        if (order.length === 0) {
            return NextResponse.json({
                success: false,
                error: "Order not found",
            }, { status: 404 });
        }

        // Format the response
        const orderDetails = {
            id: order[0].orderId,
            totalAmount: order[0].totalAmount,
            delivered: order[0].delivered,
            User: {
                email: order[0].email,
                full_name: order[0].full_name
            },
            OrderItems: order.map(item => ({
                quantity: item.quantity,
                Service: {
                    id: item.serviceId,
                    name: item.serviceName
                }
            }))
        };

        return NextResponse.json({
            success: true,
            data: {
                orderDetails,
            },
        }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}
