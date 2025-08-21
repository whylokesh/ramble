import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

export async function POST(request) {
    try {
        const { email, password, fullName, phoneNumber } = await request.json();

        // Check if the email is already registered
        const [existingUser] = await db.query('SELECT * FROM Users WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return NextResponse.json({
                success: false,
                error: 'Email is already registered',
            }, { status: 409 });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);


        // Get the current timestamp
        const now = new Date();

        // Create a new user
        const [newUser] = await db.query('INSERT INTO Users (email, password, full_name, phone_number,createdAt, updatedAt) VALUES (?, ?, ?, ?,?,?)', [email, hashedPassword, fullName, phoneNumber, now, now]);

        // Fetch the complete user data (excluding password)
        const [createdUser] = await db.query('SELECT id, email, full_name, phone_number, createdAt, updatedAt FROM Users WHERE id = ?', [newUser.insertId]);

        return NextResponse.json({
            success: true,
            data: createdUser[0]
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
        const response = NextResponse.json({ error: 'Database error' }, { status: 500 });
        response.headers.set('Cache-Control', 'no-store');
        return response;
    }
}
