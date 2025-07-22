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
        const [categories] = await db.query('SELECT * FROM Categories');

        console.log('Fetched categories from DB:', categories);

        // Construct image URLs
        const categoriesWithImageUrls = categories.map((category) => ({
            ...category,
            image_url: category.image_url.includes(',') ? category.image_url.split(',') : [category.image_url],
        }));

        console.log('Categories with image URLs:', categoriesWithImageUrls);

        const response = NextResponse.json({
            success: true,
            data: categoriesWithImageUrls,
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