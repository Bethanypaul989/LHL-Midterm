const db = require('../connection');


// Helper function to get questions by quiz category
const getQuizzesByUserId = (userId) => {
  const query = {
    text: `SELECT name
    FROM quizzes
    WHERE quizzes.user_id = $1`,
    values: [userId],
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

module.exports = { getQuizzesByUserId };
