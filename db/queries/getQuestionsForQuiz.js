const db = require('../connection');


// Helper function to get list of quizzes of a certain type from the database. Function to take in quiz category id as a parameter and return object containing multiple quizzes.
const getQuestionsForQuiz = (quizId) => {
  const query = {
    text: `SELECT
    q.id AS question_id,
    q.content AS question_content,
    MAX(CASE WHEN o.option_letter = 'a' THEN o.content END) AS option_a,
    MAX(CASE WHEN o.option_letter = 'b' THEN o.content END) AS option_b,
    MAX(CASE WHEN o.option_letter = 'c' THEN o.content END) AS option_c
  FROM
    questions q
  JOIN
    quizzes ON q.quizzes_id = quizzes.id
  LEFT JOIN
    options o ON q.id = o.questions_id
  WHERE
    quizzes.id = $1
  GROUP BY
    q.id, q.content
  ORDER BY
    q.question_order, random()
  LIMIT 3;`,
    values: [quizId],
  };

  return db.query(query)
    .then(data => {
      return data.rows;
    })
    .catch(error => {
      console.error('Error retrieving questions for quiz:', error);
      throw error;
    });
};

module.exports = { getQuestionsForQuiz };

