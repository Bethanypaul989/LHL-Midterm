/*
 * All routes for Quiz Types are defined here
 * Since this file is loaded in server.js into quiztypes,
 *   these routes are mounted onto /quiztypes
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');

// get quiz categories to browse public quizzes - same as home page
router.get('/', (req, res) => {
  return res.render(/*EJS template file name goes here */);
});

// get list of public quizzes under a category type
router.get('/:id', (req, res) => {
  
});

//submit new quiz created by user
router.post('/:id', (req, res) => {
  
});

module.exports = router;
