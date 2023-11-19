INSERT INTO answers (id, quiz_submissions_id, questions_id, options_id)VALUES
--question 1 math
(1, 1, 1, 1),
(1, 1, 1, 2),
(1, 1, 1, 3),
--2
(1, 1, 2, 4),
(1, 1, 2, 5),
(1, 1, 2, 6),
--3
(1, 1, 3, 7),
(1, 1, 3, 8),
(1, 1, 3, 9);
INSERT INTO answers (id, quiz_submissions_id, questions_id, options_id)VALUES
-- question 1 math
(2, 1, 4, 10),
(2, 1, 4, 11),
(2, 1, 4, 12),
--2
(2, 1, 5, 13),
(2, 1, 5, 14),
(2, 1, 5, 15),
--3
(2, 1, 6, 16),
(2, 1, 6, 17),
(2, 1, 6, 18);
INSERT INTO answers (id, quiz_submissions_id, questions_id, options_id)VALUES
--science quiz1
(3, 2, 7, 19),
(3, 2, 7, 20),
(3, 2, 7, 21),
--2
(3, 2, 8, 22),
(3, 2, 8, 23),
(3, 2, 8, 24),
--3
(3, 2, 9, 25),
(3, 2, 9, 26),
(3, 2, 9, 27);
INSERT INTO answers (id, quiz_submissions_id, questions_id, options_id)VALUES
--science quiz1
(4, 2, 10, 28),
(4, 2, 10, 29),
(4, 2, 10, 30),
--2
(4, 2, 11, 31),
(4, 2, 11, 32),
(4, 2, 11, 33),
--3
(4, 2, 12, 34),
(4, 2, 12, 35),
(4, 2, 12, 36);
INSERT INTO answers (id, quiz_submissions_id, questions_id, options_id)VALUES
--tech quiz1
(5, 3, 13, 37),
(5, 3, 13, 38),
(5, 3, 13, 39),
--2
(5, 3, 14, 40),
(5, 3, 14, 41),
(5, 3, 14, 42),
--3
(5, 3, 15, 43),
(5, 3, 15, 44),
(5, 3, 15, 45);
INSERT INTO answers (id, quiz_submissions_id, questions_id, options_id)VALUES
--tech quiz1
(6, 3, 16, 46),
(6, 3, 16, 47),
(6, 3, 16, 48),
--2
(6, 3, 17, 49),
(6, 3, 17, 50),
(6, 3, 17, 51),
--3
(6, 3, 18, 52),
(6, 3, 18, 53),
(6, 3, 18, 54);

ALTER SEQUENCE answers_id_seq RESTART WITH 79;
