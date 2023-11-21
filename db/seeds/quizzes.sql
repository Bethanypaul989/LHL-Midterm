INSERT INTO quizzes (id, name) VALUES (1, 'mathquiz');
INSERT INTO quizzes (id, name) VALUES (2, 'sciencequiz');
INSERT INTO quizzes (id, name) VALUES (3, 'techquiz');

ALTER SEQUENCE quizzes_id_seq RESTART WITH 4;
