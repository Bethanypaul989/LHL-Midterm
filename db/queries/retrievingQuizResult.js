const db = require('../connection');

//function that takes the generated UUID and retrieves the corresponding quiz result
const getQuizResultById = (resultId) => {
  const query = {
    text: 'SELECT * FROM quiz_result WHERE id = $1',
    values: [resultId],
  };

  return db.query(query)
    .then(data => {
      return data.rows;
    })
    .catch(error => {
      console.error('Error retrieving quiz result by ID:', error);
      throw error;
    });
};

module.exports = { getQuizResultById };
