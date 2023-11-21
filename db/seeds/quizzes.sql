INSERT INTO quizzes (id, name, user_id, private) VALUES (1, 'mathquiz', 1, NULL);
INSERT INTO quizzes (id, name, user_id, private) VALUES (2, 'sciencequiz', 1, NULL);
INSERT INTO quizzes (id, name, user_id, private) VALUES (3, 'techquiz', 1, NULL);

ALTER SEQUENCE quizzes_id_seq RESTART WITH 4;
