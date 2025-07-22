import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url)
        const id = searchParams.get('id')

        // Check if the 'id' parameter is present
        if (!id) {
            return NextResponse.json({
                success: false,
                error: 'Blog ID is required',
            }, { status: 400 });
        }

        // Retrieve the blog by ID
        const [blog] = await db.query(`SELECT * FROM Blogs WHERE id = ${id}`);

        if (!blog) {
            return NextResponse.json({
                success: false,
                error: 'Blog not found',
            }, { status: 404 });
        }

        const response = NextResponse.json({
            success: true,
            data: blog,
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

