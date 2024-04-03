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
        // Retrieve the latest 20 blogs with specific fields
        const [blogs] = await db.query(`
            SELECT id, image_url, title
            FROM Blogs
            ORDER BY createdAt DESC
            LIMIT 20
        `);

        return NextResponse.json({
            success: true,
            data: blogs,
        }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}
