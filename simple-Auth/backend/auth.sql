-- Create a new database for your authentication practice.
-- You can change the name 'auth_db' if you want.
CREATE DATABASE IF NOT EXISTS auth_db;

-- Use the new database.
USE auth_db;

-- Create the 'users' table.
-- This table is designed to store user credentials securely.
CREATE TABLE IF NOT EXISTS users (
    -- Unique identifier for the user.
    -- The user_id is automatically generated.
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    
    -- Employee ID, which should be unique for each user.
    -- This matches the check in your controller.
    emp_id VARCHAR(255) NOT NULL UNIQUE,
    
    -- Username for logging in.
    -- It is set to be unique to prevent duplicate usernames.
    username VARCHAR(255) NOT NULL UNIQUE,
    
    -- The password hash from bcrypt.
    -- Use VARCHAR(255) to ensure enough space for the hash.
    password_hash VARCHAR(255) NOT NULL,
    
    -- Timestamp for when the user was created.
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);