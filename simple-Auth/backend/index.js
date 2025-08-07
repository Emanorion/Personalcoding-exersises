// Import modules
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

// Initialize the Express app.
const app = express();
const PORT = process.env.PORT || 3000;

// Apply middleware.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Define a simple test route to check the database connection.
// This is an example of a route that uses the 'pool' object.
app.get('/test-db', async (req, res) => {
    try {
        // Get a connection from the pool.
        const connection = await pool.getConnection();
        // Execute a simple query.
        const [rows] = await connection.query('SELECT 1 + 1 AS solution');
        // Release the connection back to the pool.
        connection.release();
        // Send the result to the client.
        res.status(200).json({
            message: 'Database connection successful!',
            solution: rows[0].solution
        });
    } catch (e) {
        console.error('Database connection error:', e);
        res.status(500).json({ message: 'Failed to connect to the database.' });
    }
});

// Start the server.
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Database connection pool created.');
});