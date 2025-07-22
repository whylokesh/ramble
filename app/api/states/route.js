import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

export async function GET() {
    try {
        const [states] = await db.query('SELECT * FROM States');
        const response = NextResponse.json({
            success: true,
            data: states,
        }, { status: 200 });
        response.headers.set('Cache-Control', 'no-store');
        return response;
    } catch (error) {
        console.error(error);
        const response = NextResponse.json({ error: 'Database error' }, { status: 500 });
        response.headers.set('Cache-Control', 'no-store');
        return response;
    }
}