import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';
import jwt from 'jsonwebtoken';
require('dotenv').config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Route to receive an array of services and add them to the database
export async function POST(request) {
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

        const { servicesToAdd } = await request.json(); // Assuming the request body contains an array of services

        // Validate the received data
        if (servicesToAdd.length === 0) {
            return NextResponse.json({
                success: false,
                error: "Invalid input. Please provide an array of services to add.",
            }, { status: 400 });
        }

        // Get the current timestamp
        const now = new Date();

        // Prepare the values to be inserted into the database
        const values = servicesToAdd.map(service => {
            return [service.name, service.description, service.price, service.location, service.category_id, service.state_id, service.image_url, service.code, service.media, service.ftf, service.size, service.total_area, now, now];
        });

        // Insert services into the database in bulk
        const [createdServices] = await db.query('INSERT INTO Services (name, description, price, location, category_id, state_id, image_url, code, media, ftf, size, total_area, createdAt, updatedAt) VALUES ?', [values]);

        return NextResponse.json({
            success: true,
            data: {
                services: createdServices,
            },
        }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}
