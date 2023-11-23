/*
 * All routes for Results are defined here
 * Since this file is loaded in server.js into /result,
 *   these routes are mounted onto /result
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const resultQuery = require('../db/queries/retrievngQuizResult');

// get user quiz attempt result - url can be shared - path for front end to hit /result/:id
router.get('/:id', (req, res) => {
  const resultId = req.params.id;

  resultQuery.getQuizResultById(resultId)
  .then((result) => {
    const score = result.score / 3 * 100;
    return res.render('quizResults', score);
  }).catch((error) => {
    console.error(error);
    // Handle errors and send an appropriate response
    res.status(500).send('Internal Server Error');
  });
}); 

module.exports = router;