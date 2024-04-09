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

// Route to add a new blog
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

        const { title, description, imageUrl } = await request.json();

        // Check if title, description, and imageUrl are present
        if (!title || !description || !imageUrl) {
            return NextResponse.json({
                success: false,
                error: "Title, description, and imageUrl are required",
            }, { status: 400 });
        }

        // Create a new blog
        const now = new Date();
        const [newBlog] = await db.query('INSERT INTO Blogs (image_url, title, description, createdAt, updatedAt) VALUES (?, ?, ?, ?,?)', [imageUrl, title, description, now, now]);

        return NextResponse.json({
            success: true,
            data: {
                blogId: newBlog.insertId,
            },
        }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}
