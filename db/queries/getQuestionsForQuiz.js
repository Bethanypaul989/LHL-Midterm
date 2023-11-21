const db = require('../connection');


// Helper function to get questions by quiz category
const getQuestionsForQuiz = (quizId) => {
  const query = {
    text: 'SELECT * FROM questions JOIN quizzes ON questions.quizzes_id = quizzes.id WHERE quizzes.id = $1',
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
