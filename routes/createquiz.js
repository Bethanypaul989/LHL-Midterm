/*
 * All routes for CreateQuiz are defined here
 * Since this file is loaded in server.js into createquiz,
 *   these routes are mounted onto /createquiz
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
//const db = require('../db/connection');

//create new quiz - path for front end to hit /createquiz
router.get('/', (req, res) => {
  return res.render('createQuiz');
});

//submit new quiz created by user - path for front end to hit /quiztypes/:id
router.post('/:id', (req, res) => {
  console.log(req.body);
  /* Implement helper function that adds a new quiz to the database. Return new quiz Id*/
  /* Redirect to single quiz page for quiz that was just created. Path is in the quiz.js file. Use new quiz id*/
  
  });

module.exports = router;
