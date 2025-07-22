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

export async function POST(request) {
    try {
        const { email, password } = await request.json();

        // Find the user by email
        const [user] = await db.query('SELECT * FROM Users WHERE email = ?', [email]);
        const userPassword = user[0]['password'];


        // Check if the user exists
        if (user.length == 0) {
            const response = NextResponse.json({
                success: false,
                error: 'Invalid credentials',
            }, { status: 401 });
            response.headers.set('Cache-Control', 'no-store');
            return response;
        }

        // Check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user[0].password);
        if (!isPasswordValid) {
            const response = NextResponse.json({
                success: false,
                error: 'Invalid password',
            }, { status: 401 });
            response.headers.set('Cache-Control', 'no-store');
            return response;
        }

        // Generate a JWT token
        const jwtSecretKey = process.env.JWT_SECRET_KEY;
        const token = jwt.sign({ userId: user[0].id }, jwtSecretKey);

        // Respond with the user data and token
        const response = NextResponse.json({
            success: true,
            data: {
                userId: user[0].id,
                fullName: user[0].full_name,
                admin: user[0].is_admin,
                token: token,
            },
        }, { status: 200 });
        response.headers.set('Cache-Control', 'no-store');
        return response;
    } catch (error) {
        console.error(error);
        const response = NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
        response.headers.set('Cache-Control', 'no-store');
        return response;
    }
}
