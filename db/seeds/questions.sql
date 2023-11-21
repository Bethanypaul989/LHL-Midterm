-- Math questions
INSERT INTO questions (id, quizzes_id, content, number) VALUES
(1, 1, '2 + 3 = ?', 1),
(2, 1, '8 - 5 = ?', 2),
(3, 1, '4 * 6 = ?', 3);
INSERT INTO questions (id, quizzes_id, content, number) VALUES
(4, 1, '15 / 3 = ?', 1),
(5, 1, '10 + 7 = ?', 2),
(6, 1, '9 - 2 = ?', 3);
-- Science questions
INSERT INTO questions (id, quizzes_id, content, number) VALUES
(7, 2, 'What is the chemical symbol for water?', 1),
(8, 2, 'How many planets are in our solar system?', 2),
(9, 2, 'What is the powerhouse of the cell?', 3);
INSERT INTO questions (id, quizzes_id, content, number) VALUES
(10, 2, 'What is the largest mammal in the world?', 1),
(11, 2, 'What gas do plants absorb during photosynthesis?', 2),
(12, 2, 'Who developed the theory of relativity?', 3);
--Tech questions
INSERT INTO questions (id, quizzes_id, content, number) VALUES
(13, 3, 'What does HTML stand for?', 1),
(14, 3, 'Which programming language is known for building dynamic web pages?', 2),
(15, 3, 'What is the purpose of CSS?', 3);
INSERT INTO questions (id, quizzes_id, content, number) VALUES
(16, 3, 'What does API stand for?', 1),
(17, 3, 'Which database is known for its scalability and performance?', 2),
(18, 3, 'What is the main function of a firewall in a computer network?', 3);

ALTER SEQUENCE questions_id_seq RESTART WITH 28;
