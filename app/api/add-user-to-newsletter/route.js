import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

export async function POST(request) {
    try {
        const { name, email } = await request.json();

        // Check if the user with the provided email already exists in the newsletter
        const [existingUser] = await db.query('SELECT * FROM Newsletters WHERE email = ?', [email]);

        if (existingUser.length > 0) {
            return NextResponse.json({
                success: false,
                error: 'User with this email already subscribed to the newsletter.',
            }, { status: 409 });
        }

        // Get the current timestamp
        const now = new Date();

        // Create a new user in the newsletter
        const [newUser] = await db.query('INSERT INTO Newsletters (name, email, createdAt, updatedAt) VALUES (?, ?, ?, ?)', [name, email, now, now]);


        // Respond with the created user
        const response = NextResponse.json({
            success: true,
            data: {
                userId: newUser.insertId,
            },
        }, { status: 201 });
        response.headers.set('Cache-Control', 'no-store');
        return response;
    } catch (error) {
        console.error(error);
        const response = NextResponse.json({ error: 'Database error' }, { status: 500 });
        response.headers.set('Cache-Control', 'no-store');
        return response;
    }
}

