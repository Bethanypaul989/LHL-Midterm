/*
 * All routes for Quiz are defined here
 * Since this file is loaded in server.js into quiz,
 *   these routes are mounted onto /quiz
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

// Get single quiz to attempt or share url - path for front end to hit /quiz/:id
router.get('/:id', (req, res) => {
  const quizId = req.params.id;
  //below function only gets the quiz questions, not the answer options. Need to add the answer options and then do something before rendering
  quizTypeQueries. getQuestionsForQuiz(quizId)
  .then((questions) => {
    return res.render(/*"ejs template file name goes here",*/ questions);
  });
  /*Implement helper function that retrieves single quiz with matching Id from the database*/
  /*Render EJS template for single quiz page. Pass quiz data from database in as a variable*/

});

//Submit quiz attempt - path for front end to hit /quiz/:id
router.post('/:id', (req, res) => {

  /*Implement helper function that returns the correct answer for each question in the quiz*/
  /*Check the submitted answers to see how many match the correct answers*/
  /*Return number of correct answers*/
  /*Implement helper function to update the database with the user's quiz score and return a result id*/
  /*Redirect to the result page (path is in the user.js file) using the result id as a url parameter*/
  //extra comment
});

module.exports = router;
