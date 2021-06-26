/*
*users.js
*Muksud Hussain Mahi
*ID: 301155894
*June 24, 2021
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
