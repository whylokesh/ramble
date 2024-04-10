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
        const serviceId = searchParams.get('serviceId')

        // Check if serviceId is provided
        if (!serviceId) {
            return NextResponse.json({
                success: false,
                error: "Please provide a service ID",
            }, { status: 400 });
        }

        // Construct the SQL query to retrieve service details by ID with associated models
        const query = `
            SELECT 
                s.*, c.name AS category_name, st.name AS state_name
            FROM 
                Services s
            LEFT JOIN 
                Categories c ON s.category_id = c.id
            LEFT JOIN 
                States st ON s.state_id = st.id
            WHERE 
                s.id = ?
        `;
        const [serviceDetails] = await db.query(query, [serviceId]);

        // Check if service details are found
        if (!serviceDetails.length) {
            return NextResponse.json({
                success: false,
                error: "Service not found",
            }, { status: 404 });
        }

        // Map the service details and exclude createdAt and updatedAt fields
        const mappedService = {
            ...serviceDetails[0],
            image_url: serviceDetails[0].image_url.includes(',') ? serviceDetails[0].image_url.split(',') : [serviceDetails[0].image_url],
        };

        // Respond with the mapped service details
        return NextResponse.json({
            success: true,
            data: {
                service: mappedService,
            },
        }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

