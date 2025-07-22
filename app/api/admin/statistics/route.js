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

// Route to get statistics
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

        // Get statistics
        const [totalUsers] = await db.query('SELECT COUNT(*) AS totalUsers FROM Users');
        const [usersWithOrders] = await db.query('SELECT COUNT(DISTINCT user_id) AS usersWithOrders FROM Orders');

        const [totalOrders] = await db.query('SELECT COUNT(*) AS totalOrders FROM Orders');
        const [deliveredOrders] = await db.query('SELECT COUNT(*) AS deliveredOrders FROM Orders WHERE delivered = true');

        const [totalServices] = await db.query('SELECT COUNT(*) AS totalServices FROM Services');
        const [totalCategories] = await db.query('SELECT COUNT(*) AS totalCategories FROM Categories');

        const percentageOfUsersWithOrders = (usersWithOrders[0].usersWithOrders / totalUsers[0].totalUsers) * 100;
        const percentageOfDeliveredOrders = (deliveredOrders[0].deliveredOrders / totalOrders[0].totalOrders) * 100;

        const response = NextResponse.json({
            success: true,
            data: {
                numberOfUsers: totalUsers[0].totalUsers,
                numberOfOrders: totalOrders[0].totalOrders,
                numberOfDeliveredOrders: deliveredOrders[0].deliveredOrders,
                numberOfServices: totalServices[0].totalServices,
                numberOfCategories: totalCategories[0].totalCategories,
                percentageOfUsersWithOrders,
                percentageOfDeliveredOrders,
            },
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
