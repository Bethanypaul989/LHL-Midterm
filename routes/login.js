/*
 * All routes for Login bypass are defined here
 * Since this file is loaded in server.js into login,
 *   these routes are mounted onto /login
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

//bypass login http://localhost:8080/login/1
router.get('/:id', (req, res) => {
  res.cookie('user_id', req.params.id);
  return res.redirect('../index');
});

module.exports = router;