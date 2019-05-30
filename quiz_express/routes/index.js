var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//Credits page

router.get('/credits', function(req, res, next) {
	res.render('credits');
})

router.get('/quizzes', quizController.index);

module.exports = router;
