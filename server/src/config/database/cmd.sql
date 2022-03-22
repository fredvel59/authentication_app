CREATE DATABASE users_auth;

CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR (50),
  bio TEXT,
  phone TEXT,
  password TEXT
);

ALTER TABLE users ADD photo_public_id TEXT; 
ALTER TABLE users ADD verify_email VARCHAR(12); 
ALTER TABLE users ADD verified BOOLEAN DEFAULT false; 

ALTER TABLE users ALTER COLUMN password TEXT;
--  to add new columns to a table exists

-- to delete a column from table
ALTER TABLE users DROP COLUMN password;