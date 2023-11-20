-- Options for math questions
INSERT INTO options (id, questions_id, content, option_letter, correct) VALUES
-- Options for question 1
(1, 1, '4', 'a', FALSE),
(2, 1, '5', 'b', TRUE),
(3, 1, '6', 'c', FALSE),
-- Options for question 2
(4, 2, '2', 'a', FALSE),
(5, 2, '3', 'b', TRUE),
(6, 2, '4', 'c', FALSE),
-- Options for question 3
(7, 3, '20', 'a', FALSE),
(8, 3, '24', 'b', TRUE),
(9, 3, '25', 'c', FALSE);

-- Options for question 4
INSERT INTO options (id, questions_id, content, option_letter, correct) VALUES
(10, 4, '4', 'a', FALSE),
(11, 4, '5', 'b', TRUE),
(12, 4, '6', 'c', FALSE),
-- Options for question 5
(13, 5, '16', 'a', FALSE),
(14, 5, '17', 'b', TRUE),
(15, 5, '18', 'c', FALSE),
-- Options for question 6
(16, 6, '7', 'a', FALSE),
(17, 6, '8', 'b', TRUE),
(18, 6, '9', 'c', FALSE);

-- Options for question 7
INSERT INTO options (id, questions_id, content, option_letter, correct) VALUES
(19, 7, 'H2O', 'a', TRUE),
(20, 7, 'CO2', 'b', FALSE),
(21, 7, 'O2', 'c', FALSE),
-- Options for question 8
(22, 8, '8', 'a', FALSE),
(23, 8, '9', 'b', TRUE),
(24, 8, '10', 'c', FALSE),
-- Options for question 9
(25, 9, 'Nucleus', 'a', FALSE),
(26, 9, 'Mitochondria', 'b', FALSE),
(27, 9, 'Chloroplast', 'c', TRUE);

-- Options for question 10
INSERT INTO options (id, questions_id, content, option_letter, correct) VALUES
(28, 10, 'Elephant', 'a', FALSE),
(29, 10, 'Blue Whale', 'b', TRUE),
(30, 10, 'Giraffe', 'c', FALSE),
-- Options for question 11
(31, 11, 'Oxygen', 'a', FALSE),
(32, 11, 'Carbon Dioxide', 'b', FALSE),
(33, 11, 'Carbon Monoxide', 'c', TRUE),
-- Options for question 12
(34, 12, 'Isaac Newton', 'a', FALSE),
(35, 12, 'Galileo Galilei', 'b', FALSE),
(36, 12, 'Albert Einstein', 'c', TRUE);

-- Options for question 13
INSERT INTO options (id, questions_id, content, option_letter, correct) VALUES
(37, 13, 'HyperText Markup Language', 'a', TRUE),
(38, 13, 'High-Level Text Markup Language', 'b', FALSE),
(39, 13, 'Home Tool Markup Language', 'c', FALSE),
-- Options for question 14
(40, 14, 'JavaScript', 'a', FALSE),
(41, 14, 'Python', 'b', FALSE),
(42, 14, 'PHP', 'c', TRUE),
-- Options for question 15
(43, 15, 'To define the structure and layout of a document', 'a', TRUE),
(44, 15, 'To perform mathematical calculations', 'b', FALSE),
(45, 15, 'To create interactive web pages', 'c', FALSE);

-- Options for question 16
INSERT INTO options (id, questions_id, content, option_letter, correct) VALUES
(46, 16, 'Application Programming Interface', 'a', TRUE),
(47, 16, 'Advanced Programming Interface', 'b', FALSE),
(48, 16, 'Automated Processing Interface', 'c', FALSE),
-- Options for question 17
(49, 17, 'MySQL', 'a', FALSE),
(50, 17, 'MongoDB', 'b', TRUE),
(51, 17, 'SQLite', 'c', FALSE),
-- Options for question 18
(52, 18, 'To filter spam emails', 'a', FALSE),
(53, 18, 'To monitor network traffic and control access', 'b', TRUE),
(54, 18, 'To encrypt data transmissions', 'c', FALSE);

ALTER SEQUENCE options_id_seq RESTART WITH 85;
