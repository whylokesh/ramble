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

// Route to add a service
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

        const {
            name,
            description,
            price,
            location,
            categoryName,
            stateName,
            code,
            media,
            ftf,
            size,
            totalArea,
            imageUrl,
        } = await request.json();

        // Check if the service already exists
        const [existingService] = await db.query('SELECT * FROM Services WHERE name = ?', [name]);
        if (existingService.length > 0) {
            return NextResponse.json({
                success: false,
                error: "Service with this name already exists.",
            }, { status: 409 });
        }

        // Check if the category exists
        const [category] = await db.query('SELECT * FROM Categories WHERE name = ?', [categoryName]);
        if (category.length === 0) {
            return NextResponse.json({
                success: false,
                error: "Category not found.",
            }, { status: 404 });
        }

        // Check if the state exists
        const [state] = await db.query('SELECT * FROM States WHERE name = ?', [stateName]);
        if (state.length === 0) {
            return NextResponse.json({
                success: false,
                error: "State not found.",
            }, { status: 404 });
        }

        // Get the current timestamp
        const now = new Date();

        // Create a new service
        const [newService] = await db.query('INSERT INTO Services (name, description, price, location, category_id, state_id, image_url, code, media, ftf, size, total_area, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)', [name, description, price, location, category[0].id, state[0].id, imageUrl, code, media, ftf, size, totalArea, now, now]);

        return NextResponse.json({
            success: true,
            data: {
                serviceId: newService.insertId,
            },
        }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}
