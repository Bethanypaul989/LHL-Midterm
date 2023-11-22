const db = require('../connection');

//enable phcrypto extension for generating the result id
const enablePgcryptoExtension = () => {
  const query = {
    text: 'CREATE EXTENSION IF NOT EXISTS "pgcrypto";',
  };

  return db.query(query)
    .then(data => {
      console.log('pgcrypto extension enabled.');
    })
    .catch(error => {
      console.error('Error enabling pgcrypto extension:', error);
      throw error;
    });
}
//Helper function that updates the database with a user’s quiz attempt result.Returns a result id.

const updateQuizResult = (quizResult) => {
  const { quizzes_id, user_id, score } = quizResult;

  const query = {
    text: `INSERT INTO quiz_result (quizzes_id, user_id, score)
    VALUES ($1, $2, $3)
    ON CONFLICT (quizzes_id, user_id) DO UPDATE SET score = $3
    RETURNING id`,
    values: [quizzes_id, user_id || null, score]
  };

  return db.query(query)
    .then(data => {
      return data.rows;
    })
    .catch(error => {
      console.error('Error retrieving quizzes by user:', error);
      throw error;
    });
};


  module.exports = { updateQuizResult, enablePgcryptoExtension };
