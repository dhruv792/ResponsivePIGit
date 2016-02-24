var express = require('express');
var router = express.Router();
var clientsData = require('../clients.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.clientsData = clientsData;
  res.render('index');

});

module.exports = router;
