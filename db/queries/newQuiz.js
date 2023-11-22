const db = require('../connection');

//Helper function to add a new quiz to the database based on user inputs. Returns the new quiz id for use in the backend.

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

const makeNewQuiz = (quizType, questions) => {
  const { quizzes_id, user_id, private } = quizType;

  const query = {
    text: 'INSERT INTO quizzes (name, user_id, private) VALUES ($1, $2, $3) RETURNING id',
    values: [quizzes_id, user_id, private],
  };

  
}
