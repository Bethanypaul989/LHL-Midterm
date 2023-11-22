// PG database client/connection setup
const { Pool } = require('pg');
const path = require('path');
const config = require('dotenv').config({ path: path.resolve(__dirname, './../.env') });

const dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};
console.log("hello", dbParams);
const db = new Pool(dbParams);

db.connect();

module.exports = db;
