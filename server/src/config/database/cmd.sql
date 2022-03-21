CREATE DATABASE users_auth;

CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR (50),
  bio TEXT,
  phone TEXT,
  password VARCHAR(30)
);

ALTER TABLE users ADD photo TEXT; 
--  to add new columns to a table exists