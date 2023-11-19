/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /user,
 *   these routes are mounted onto /user
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

// get list of public & private quizzes created by user - path for front end to hit /user/:id
router.get('/:id', (req, res) => {
  /*Implement helper function that gets list of all quizzes created by this user id*/
  /*Render EJS template that displays all user quizzes (both public & private). Pass in quizzes as variable.*/
}); 

module.exports = router;
