//Helper function to get list of quizzes of a certain type from the database. Function to take in quiz category id as a parameter and return object containing multiple quizzes.

const db = require('../connection');

const getTypesofQuizzes = (quizId) => {
  const query = {
    text: `SELECT name
    FROM quizzes
    WHERE quizzes.id = $1`,
    values: [quizId],
  };

  return db.query('SELECT name FROM quizzes;')
    .then(data => {
      return data.rows;
    })
    .catch(error => {
      console.error('Error retrieving types of quizzes', error);
      throw error;
    });
};

module.exports = { getTypesofQuizzes };
