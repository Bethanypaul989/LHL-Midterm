
const { getTypesofQuizzes } = require('../queries/getTypesofQuizzes');


// const quizId = 2; // Replace with the actual quiz ID you want to retrieve questions for
// getQuestionsForQuiz(quizId)
//   .then(questions => {
//     console.log('Questions for quiz:', questions);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


getTypesofQuizzes()
  .then(quizzes => {
    console.log('Types of quizzes:', quizzes);
  })
  .catch(error => {
    console.log('error:', error);
  })
