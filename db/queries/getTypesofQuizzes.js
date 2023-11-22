//Helper function to get list of quizzes of a certain type from the database. Function to take in quiz category id as a parameter and return object containing multiple quizzes.

const db = require('../connection');

const getTypesofQuizzes = () => {
  return db.query('SELECT * FROM quizzes;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getTypesofQuizzes };
