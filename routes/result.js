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


module.exports = router;
