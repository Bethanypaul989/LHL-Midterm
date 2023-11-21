
const { getQuestionsForQuiz } = require('../queries/getQuestionsForQuiz');


const quizId = 1; // Replace with the actual quiz ID you want to retrieve questions for
getQuestionsForQuiz(quizId)
  .then(questions => {
    console.log('Questions for quiz:', questions);
  })
  .catch(error => {
    console.error('Error:', error);
  });
