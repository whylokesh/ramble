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
        const location = searchParams.get('location')

        // Check if the location parameter is provided
        if (!location) {
            return NextResponse.json({
                success: false,
                error: "Location parameter is missing",
            }, { status: 400 });
        }

        // Construct the SQL query to search for services with a similar location
        const query = 'SELECT * FROM Services WHERE location LIKE ?';
        const [services] = await db.query(query, [`%${location}%`]);

        // Check if services are found
        if (services.length === 0) {
            return NextResponse.json({
                success: false,
                error: "No services found for the provided location",
            }, { status: 404 });
        }

        // Map the services before sending in the response
        const mappedServices = services.map((service) => ({
            ...service,
            image_url: service.image_url.includes(',') ? service.image_url.split(',') : [service.image_url],
        }));

        // Respond with the list of matching services
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
