import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
require('dotenv').config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Route to add a category
export async function POST(request) {
    try {
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

        const { name, description, imageUrl } = await request.json();

        // Check if the category already exists
        const [existingCategory] = await db.query('SELECT * FROM Categories WHERE name = ?', [name]);
        if (existingCategory.length > 0) {
            return NextResponse.json({
                success: false,
                error: "Category with this name already exists.",
            }, { status: 409 });
        }

        // Get the current timestamp
        const now = new Date();

        // Create a new category
        const [newCategory] = await db.query('INSERT INTO Categories (name, description, image_url,createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)', [name, description, imageUrl, now, now]);

        // Fetch the complete category data
        const [createdCategory] = await db.query('SELECT * FROM Categories WHERE id = ?', [newCategory.insertId]);

        // Respond with the complete category data
        return NextResponse.json({
            success: true,
            data: createdCategory[0]
        }, {
            status: 201,
            headers: {
                "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
                "Pragma": "no-cache",
                "Expires": "0"
            }
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ 
            success: false, 
            error: error.message 
        }, {
            status: 500,
            headers: {
                "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
                "Pragma": "no-cache",
                "Expires": "0"
            }
        });
    }
}