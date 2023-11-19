/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /user,
 *   these routes are mounted onto /user
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

// get user quiz attempt result - url can be shared
router.get('/result/:id', (req, res) => {
  
}); 

// get list of public & private quizzes created by user
router.get('/:id', (req, res) => {
  
}); 

module.exports = router;
