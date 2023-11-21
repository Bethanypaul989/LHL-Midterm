INSERT INTO quiz_submissions (id, quizzes_id, user_id, score)VALUES
(1, 1, 1, NULL);
INSERT INTO quiz_submissions (id, quizzes_id, user_id, score)VALUES
(2, 2, 1, NULL);
INSERT INTO quiz_submissions (id, quizzes_id, user_id, score)VALUES
(3, 3, 1, NULL);

ALTER SEQUENCE quiz_submissions_id_seq RESTART WITH 7;
