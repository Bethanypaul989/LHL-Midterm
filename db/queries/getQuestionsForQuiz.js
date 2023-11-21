const db = require('../connection');


// Helper function to get questions by quiz category
const getQuestionsForQuiz = (quizId) => {
  const query = {
    text: 'SELECT * FROM questions JOIN quizzes ON questions.quizzes_id = quizzes.id WHERE quizzes.id = $1 ORDER BY random() LIMIT 3;',
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

// pool.query(`
// SELECT id, name, cohort_id
// FROM students
// LIMIT 5;
// `)
// .then(res => {
//   res.rows.forEach(user => {
//     console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort`);
//   })
// });
