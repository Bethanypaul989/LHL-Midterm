/*
 * All routes for CreateQuiz are defined here
 * Since this file is loaded in server.js into createquiz,
 *   these routes are mounted onto /createquiz
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const createQuery = require('../db/queries/newQuiz');
const db = require('../db/connection');

//create new quiz - path for front end to hit /createquiz
router.get('/', (req, res) => {
  return res.render('createQuiz');
});

//submit new quiz created by user - path for front end to hit /createquiz
router.post('/', (req, res) => {
  console.log(req.body);
  return res.redirect('../');
  /*createQuery.makeNewQuiz(req.body)
  .then((result) => {
    console.log('result is', result);
    return res.redirect(`/quiz/${result}`);
  }).catch((error) => {
    console.error(error);
    // Handle errors and send an appropriate response
    res.status(500).send('Internal Server Error');
  });*/

  });

module.exports = router;
