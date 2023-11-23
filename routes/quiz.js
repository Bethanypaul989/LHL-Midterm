/*
 * All routes for Quiz are defined here
 * Since this file is loaded in server.js into quiz,
 *   these routes are mounted onto /quiz
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const cookieParser = require('cookie-parser');

router.use(cookieParser());

const questionQuery = require('../db/queries/getQuestionsForQuiz');
const resultQuery = require('../db/queries/resultId');
//const answerQuery = require('../db/queries/correctAnswers');
//const db = require('../db/connection');

// Get single quiz to attempt or share url - path for front end to hit /quiz/:id
router.get('/:id', (req, res) => {
  const quizId = req.params.id;
  //below function only gets the quiz questions, not the answer options. Need to add the answer options and then do something before rendering
  questionQuery.getQuestionsForQuiz(quizId)
  .then((questions) => {
    const templateVars = { questions: questions };
    console.log("This is the data being passed to the front end. Variable name = questions", templateVars);
    return res.render('quizzes-show', templateVars);
  }).catch((error) => {
    console.error(error);
    // Handle errors and send an appropriate response
    res.status(500).send('Internal Server Error');
  });
});

//Submit quiz attempt - path for front end to hit /quiz/:id
router.post('/:id', (req, res) => {
  //const quizId = req.params.id;
  const userId = req.cookies.user_id;
  const result = {
    user_id: userId,
    score: 2,
    quizzes_id: 2
  }
  console.log(result);
  console.log(req.body);

  //const userAnswers = req.body;
  /*Implement helper function that returns the correct answer for each question in the quiz*/
  /*answerQuery.getCorrectAnswers(quizId)
  .then((answers) => {
    
  }).catch((error) => {
    console.error(error);
    // Handle errors and send an appropriate response
    res.status(500).send('Internal Server Error');
  });*/
  /*Check the submitted answers to see how many match the correct answers*/
  /*Return number of correct answers*/
  /*Implement helper function to update the database with the user's quiz score and return a result id*/
  resultQuery.updateQuizResult(result)
  .then((response) => {
    const responseId = response;
    console.log("responseId", responseId);
    return res.redirect(`/result/${responseId}`);
  }).catch((error) => {
    console.error(error);
    // Handle errors and send an appropriate response
    res.status(500).send('Internal Server Error');
  });

});

module.exports = router;
