CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,                 -- Auto-incremented unique ID
  name VARCHAR(100) NOT NULL,            -- User's name
  email VARCHAR(100) NOT NULL,           -- User's email
  message TEXT NOT NULL,                 -- Message content
  phone VARCHAR(20) NOT NULL,            -- User's phone number
  subject VARCHAR(100),                  -- Subject of the message
  created_at TIMESTAMP DEFAULT NOW()     -- Submission timestamp
);

CREATE TABLE job_openings (
    job_id SERIAL PRIMARY KEY,                         -- Unique ID for each job
    job_title VARCHAR(150) NOT NULL,                   -- e.g., 'Data Analyst – Marketing Analytics'
    location VARCHAR(150),                             -- e.g., 'Sydney, Australia' or 'Remote'
    employment_type VARCHAR(50),                       -- e.g., 'Full-time', 'Part-time', 'Contract'
    duration VARCHAR(100),                             -- e.g., 'Permanent', '6 months'
    company_name VARCHAR(150) NOT NULL,                -- Name of company
    company_description TEXT,                          -- Short intro about the company
    role_summary TEXT,                                 -- 2–3 sentence position overview
    responsibilities TEXT,                             -- Could be stored as JSON or line-separated text
    requirements TEXT,                                 -- Must-have skills/qualifications
    nice_to_have TEXT,                                 -- Bonus skills
    benefits TEXT,                                     -- Salary & perks
    salary_range VARCHAR(100),                         -- e.g., '$80k–$100k/year'
    contact_email VARCHAR(150),                        -- For sending applications
    equal_opportunity_stmt TEXT,                       -- Diversity/inclusion note
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,    -- Record creation date
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP     -- Last update date
);
