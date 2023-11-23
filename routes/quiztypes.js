/*
 * All routes for Quiz Types are defined here
 * Since this file is loaded in server.js into quiztypes,
 *   these routes are mounted onto /quiztypes
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const quizQueries = require('../db/queries/getTypesofQuizzes');

// path /quiztypes - redirect to index.ejs homepage to display quiz types to choose from
router.get('/', (req, res) => {
  return res.redirect('../');
});

// get list of public quizzes under a category type - path for front end to hit /quiztypes/:id
router.get('/:id', (req, res) => {
  const categoryId = req.params.id;
  quizQueries.getTypesofQuizzes(categoryId)
  .then((questions) => {
    const templateVars = { questions: questions };
    console.log("This is the data being passed to the fronte end. Variable name = questions", templateVars);
    return res.render('quizzes', templateVars);
  }).catch((error) => {
    console.error(error);
    // Handle errors and send an appropriate response
    res.status(500).send('Internal Server Error');
  });

});

module.exports = router;
