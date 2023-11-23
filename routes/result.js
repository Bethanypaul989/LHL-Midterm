/*
 * All routes for Results are defined here
 * Since this file is loaded in server.js into /result,
 *   these routes are mounted onto /result
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const resultQuery = require('../db/queries/retrievingQuizResult');

// get user quiz attempt result - url can be shared - path for front end to hit /result/:id
router.get('/:id', (req, res) => {
  const resultId = req.params.id;
  /*Implement helper function that retrieves quiz result from database based on result id*/
  /*Render result EJS template with quiz result passed in as a variable*/
  return res.render('quizResults' /*need to add template vars - quiz list from database*/);
});

module.exports = router;
