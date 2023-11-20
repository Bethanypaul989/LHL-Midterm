/*
 * All routes for Quiz Types are defined here
 * Since this file is loaded in server.js into quiztypes,
 *   these routes are mounted onto /quiztypes
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const quizTypeQueries = require('../db/queries/helpers');

// path /quiztypes - redirect to index.ejs homepage to display quiz types to choose from
router.get('/', (req, res) => {
  return res.redirect('../index');
});

// get list of public quizzes under a category type - path for front end to hit /quiztypes/:id
router.get('/:id', (req, res) => {
  const categoryId = req.params.id;
  quizTypeQueries. getQuestionsForQuiz(categoryId)
  .then((questions) => {
    return res.render(/*"ejs template file name goes here",*/ questions);
  });
});

//submit new quiz created by user - path for front end to hit /quiztypes/:id
router.post('/:id', (req, res) => {
  
/* Implement helper function that adds a new quiz to the database. Return new quiz Id*/
/* Redirect to single quiz page for quiz that was just created. Path is in the quiz.js file. Use new quiz id*/

});

module.exports = router;
