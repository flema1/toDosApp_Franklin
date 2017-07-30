
-- CREATE DATABASE todos_dev;
-- \c todos_dev

CREATE TABLE IF NOT EXISTS todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  category VARCHAR(50),
  status VARCHAR(50)
);

-- CREATE TABLE IF NOT EXISTS users (
--   id SERIAL PRIMARY KEY,
--   username VARCHAR(255) UNIQUE NOT NULL,
--   email VARCHAR(255) UNIQUE NOT NULL,
--   password_digest TEXT NOT NULL,
--   firstname VARCHAR(255),
--   lastname VARCHAR(255)
-- );

-- ALTER TABLE todo 
-- ADD COLUMN user_id INTEGER REFERENCES users(id);

