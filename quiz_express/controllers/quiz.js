const Sequelize = require("sequelize");
const {models} = require('../models/index.js');

exports.index  = (req, res, next) => {
	models.quiz.findAll()
		.then(quizzes => {
			res.render('quizzes/index.ejs', {quizzes});
		})
		.catch(error => next (error));
};