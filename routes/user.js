/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /user,
 *   these routes are mounted onto /user
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQuizQuery = require('../db/queries/ListofQuizzeswithUser');

// get list of public & private quizzes created by user - path for front end to hit /user/:id
router.get('/:id', (req, res) => {
  const userId = req.params.id;

  userQuizQuery.getQuizzesByUserId(userId)
  .then((quizzes) => {
    return res.render('./quizzes', quizzes);
  }).catch((error) => {
    console.error(error);
    // Handle errors and send an appropriate response
    res.status(500).send('Internal Server Error');
  });
}); 

module.exports = router;
