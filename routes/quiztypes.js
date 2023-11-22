/*
 * All routes for Quiz Types are defined here
 * Since this file is loaded in server.js into quiztypes,
 *   these routes are mounted onto /quiztypes
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
/*const userQueries = require('../db/queries/users');*/

// path /quiztypes - redirect to index.ejs homepage to display quiz types to choose from
router.get('/', (req, res) => {
  return res.redirect('../');
});

// get list of public quizzes under a category type - path for front end to hit /quiztypes/:id
router.get('/:id', (req, res) => {
  const categoryId = req.params.id;

  /* Implement helper function that retrieves a list of quizzes with category Id from the database*/
  /* Render EJS template with quiz list passed in as a variable so list of quizzes of that type can be displayed */
  return res.render('quizzes' /*need to add template vars - quiz list from database*/);

});

module.exports = router;
