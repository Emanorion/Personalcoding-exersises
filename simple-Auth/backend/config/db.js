// Use the promise-based version for cleaner async/await code.
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Load environment variables.
dotenv.config();

// Create the database connection pool.
export const pool = mysql.createPool({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dateStrings: true,
    waitForConnections: true,
    connectionLimit: 10
});