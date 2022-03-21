CREATE DATABASE users_auth;

CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR (50),
  bio TEXT,
  phone TEXT,
  password TEXT
);

ALTER TABLE users ADD photo_public_id TEXT; 
--  to add new columns to a table exists