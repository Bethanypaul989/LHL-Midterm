INSERT INTO answers (quiz_result_id, questions_id, options_id)VALUES
--question 1 math
(1, 1, 1),
(1, 1, 2),
(1, 1, 3),
--2
(1, 2, 4),
(1, 2, 5),
(1, 2, 6),
--3
(1, 3, 7),
(1, 3, 8),
(1, 3, 9);
INSERT INTO answers (quiz_result_id, questions_id, options_id)VALUES
-- question 1 math
(1, 4, 10),
(1, 4, 11),
(1, 4, 12),
--2
(1, 5, 13),
(1, 5, 14),
(1, 5, 15),
--3
(1, 6, 16),
(1, 6, 17),
(1, 6, 18);
INSERT INTO answers (quiz_result_id, questions_id, options_id)VALUES
--science quiz1
(2, 7, 19),
(2, 7, 20),
(2, 7, 21),
--2
(2, 8, 22),
(2, 8, 23),
(2, 8, 24),
--3
(2, 9, 25),
(2, 9, 26),
(2, 9, 27);
INSERT INTO answers (quiz_result_id, questions_id, options_id)VALUES
--science quiz1
(2, 10, 28),
(2, 10, 29),
(2, 10, 30),
--2
(2, 11, 31),
(2, 11, 32),
(2, 11, 33),
--3
(2, 12, 34),
(2, 12, 35),
(2, 12, 36);
INSERT INTO answers (quiz_result_id, questions_id, options_id)VALUES
--tech quiz1
(3, 13, 37),
(3, 13, 38),
(3, 13, 39),
--2
(3, 14, 40),
(3, 14, 41),
(3, 14, 42),
--3
(3, 15, 43),
(3, 15, 44),
(3, 15, 45);
INSERT INTO answers (quiz_result_id, questions_id, options_id)VALUES
--tech quiz1
(3, 16, 46),
(3, 16, 47),
(3, 16, 48),
--2
(3, 17, 49),
(3, 17, 50),
(3, 17, 51),
--3
(3, 18, 52),
(3, 18, 53),
(3, 18, 54);

ALTER SEQUENCE answers_id_seq RESTART WITH 79;
