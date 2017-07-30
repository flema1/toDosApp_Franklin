
-- CREATE DATABASE todos_dev;
\c todos_dev

CREATE TABLE IF NOT EXISTS todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  category VARCHAR(50),
  status VARCHAR(50)
);

