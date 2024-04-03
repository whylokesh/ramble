import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';

const db = mysql.createPool({
    // host: process.env.DB_HOST,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_DATABASE
    host: "ramble-database-prod.c7wo6qem83cz.ap-south-1.rds.amazonaws.com",
    user: "admin",
    database: "ramble_database",
    password: "RambleShivam_database70145"
});

export async function GET() {
    try {
        const [rows] = await db.query('SELECT * FROM States');
        return NextResponse.json(rows);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}