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
  return res.render('./createQuiz');
});

module.exports = router;