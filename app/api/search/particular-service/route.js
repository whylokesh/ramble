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
        const searchTerm = searchParams.get('searchTerm')

        // Search services by name or location using raw SQL query
        const [services] = await db.query('SELECT * FROM Services WHERE name LIKE ? OR location LIKE ? LIMIT 5', [`%${searchTerm}%`, `%${searchTerm}%`]);

        if (services.length === 0) {
            return NextResponse.json({
                success: false,
                error: "No services found",
            }, { status: 404 });
        }

        // Respond with the list of services
        return NextResponse.json({
            success: true,
            data: {
                services,
            },
        }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
