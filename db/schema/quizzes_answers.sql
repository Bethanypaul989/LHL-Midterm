-- Enable pgcrypto extension
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE quizzes (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  quizzes_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  number INTEGER NOT NULL
);

CREATE TABLE options (
  id SERIAL PRIMARY KEY NOT NULL,
  questions_id INTEGER NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  option_letter CHAR(1) NOT NULL,
  correct BOOLEAN NOT NULL
);

CREATE TABLE quiz_submissions (
  id SERIAL PRIMARY KEY NOT NULL,
  quizzes_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES user(id) ON DELETE CASCADE,
  score INTEGER
);

CREATE TABLE answers (
  id SERIAL PRIMARY KEY NOT NULL,
  quiz_submissions_id INTEGER REFERENCES quiz_submissions(id) ON DELETE CASCADE,
  questions_id INTEGER REFERENCES questions(id) ON DELETE CASCADE,
  options_id INTEGER REFERENCES options(id) ON DELETE CASCADE
);

CREATE TABLE "user" (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);


