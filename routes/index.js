let express = require('express');
let router = express.Router();

let transaction = require('../models/Transaction.js').Transaction;


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express / React Template' });
});

module.exports = router;
