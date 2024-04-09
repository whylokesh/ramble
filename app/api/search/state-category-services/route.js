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
        const { searchParams } = new URL(request.url);
        const stateId = searchParams.get('stateId')
        const categoryId = searchParams.get('categoryId')
        const price = searchParams.get('price')

        // Check if either stateId or categoryId is provided
        if (!stateId && !categoryId) {
            return NextResponse.json({
                success: false,
                error: "Please provide either a state ID or a category ID",
            }, { status: 400 });
        }

        // Construct the SQL query and parameters based on the provided IDs and price
        let query = 'SELECT * FROM Services';
        const params = [];

        if (stateId) {
            query += ' WHERE state_id = ?';
            params.push(stateId);
        }
        if (categoryId) {
            query += stateId ? ' AND category_id = ?' : ' WHERE category_id = ?';
            params.push(categoryId);
        }
        if (price) {
            query += ' AND price <= ?';
            params.push(parseFloat(price));
        }

        // Execute the SQL query
        const [services] = await db.query(query, params);

        // Check if services are found
        if (services.length === 0) {
            return NextResponse.json({
                success: false,
                error: "No services found",
            }, { status: 404 });
        }

        // Map the services before sending in the response
        const mappedServices = services.map((service) => ({
            ...service,
            image_url: service.image_url.includes(',') ? service.image_url.split(',') : [service.image_url],
        }));

        // Respond with the list of services
        return NextResponse.json({
            success: true,
            data: {
                services: mappedServices,
            },
        }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

