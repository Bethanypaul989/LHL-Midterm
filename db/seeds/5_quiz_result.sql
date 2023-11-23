INSERT INTO quiz_result (quizzes_id, user_id, score)VALUES
(1, 1, 2);
INSERT INTO quiz_result (quizzes_id, user_id, score)VALUES
(2, 1, 1);
INSERT INTO quiz_result (quizzes_id, user_id, score)VALUES
(3, 1, 3);

ALTER SEQUENCE quiz_result_id_seq RESTART WITH 7;
