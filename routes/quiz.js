/*
 * All routes for Quiz are defined here
 * Since this file is loaded in server.js into quiz,
 *   these routes are mounted onto /quiz
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

// Get single quiz to attempt or share url
router.get('/:id', (req, res) => {
  
});

//Submit quiz attempt
router.post('/:id', (req, res) => {
  
});

module.exports = router;
