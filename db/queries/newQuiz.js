const db = require('../connection');

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

const createQuizWithQuestions = async (quizType, questions) => {
  try {
    const { quizzes_id, user_id, private } = quizType;

    const quizInsertQuery = {
      text: 'INSERT INTO quizzes (name, user_id, private) VALUES ($1, $2, $3) RETURNING id',
      values: [quizzes_id, user_id, private],
    };

    const quizResult = await db.query(quizInsertQuery);
    const quizId = quizResult.rows[0].id;

    if (private) {
      return { quizId };
    }

    for (const question of questions) {
      const questionInsertQuery = {
        text: 'INSERT INTO questions (quizzes_id, content) VALUES ($1, $2) RETURNING id',
        values: [quizId, question.content],
      };

      const questionResult = await db.query(questionInsertQuery);
      const questionId = questionResult.rows[0].id;

      for (const option of question.options) {
        const optionInsertQuery = {
          text: 'INSERT INTO options (questions_id, content, option_letter, correct) VALUES ($1, $2, $3, $4)',
          values: [questionId, option.content, option.optionLetter, option.correct],
        };

        await db.query(optionInsertQuery);
      }
    }

    return { quizId };
  } catch (error) {
    console.error('Error creating quiz with questions:', error);
    throw error;
  }
};

module.exports = { createQuizWithQuestions, enablePgcryptoExtension };
