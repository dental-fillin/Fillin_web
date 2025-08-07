CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,                 -- Auto-incremented unique ID
  name VARCHAR(100) NOT NULL,            -- User's name
  email VARCHAR(100) NOT NULL,           -- User's email
  message TEXT NOT NULL,                 -- Message content
  created_at TIMESTAMP DEFAULT NOW()     -- Submission timestamp
);
