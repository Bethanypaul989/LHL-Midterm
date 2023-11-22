const db = require('../connection');


//Helper function that takes in a quiz id and returns the correct answers to each question in that quiz from the database.

const getCorrectAnswers = (quizId) => {
  const query = {
    text: 'SELECT q.content AS question_content, o.option_letter AS correct_option_letter FROM questions q JOIN options o ON q.id = o.questions_id WHERE q.quizzes_id = $1 AND o.correct = TRUE;',
    values: [quizId],
  };

  return db.query(query)
    .then(data => {
      return data.rows;
    })
    .catch(error => {
      console.error('Error retrieving answers for quiz:', error);
      throw error;
    });
};

module.exports = { getCorrectAnswers };
