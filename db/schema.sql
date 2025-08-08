CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,                 -- Auto-incremented unique ID
  name VARCHAR(100) NOT NULL,            -- User's name
  email VARCHAR(100) NOT NULL,           -- User's email
  message TEXT NOT NULL,                 -- Message content
  phone VARCHAR(20) NOT NULL,            -- User's phone number
  subject VARCHAR(100),                  -- Subject of the message
  created_at TIMESTAMP DEFAULT NOW()     -- Submission timestamp
);
