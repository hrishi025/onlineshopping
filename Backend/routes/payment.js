const express = require('express');
const db = require('../db');
const utils = require('../utils');

// router will be used to add routes in the app server
const router = express.Router();

// Get Payment Details
router.get('/payment', (request, response) => {
	const statement = `SELECT pay_id, user_id, pay_amount, orderdetails_id, pay_date, pay_type FROM payment`;
	db.execute(statement, (error, data) => {
		response.send(utils.createResult(error, data));
	});
});

//Insert new Payment
router.post('/payment', (request, response) => {
	const { user_id, pay_amount, orderdetails_id, pay_date, pay_type } = request.body;
	const statement = `INSERT INTO payment(user_id, pay_amount, orderdetails_id, pay_date, pay_type) VALUES('${user_id}', '${pay_amount}', '${orderdetails_id}', '${pay_date}', '${pay_type}')`;
	db.execute(statement, (error, data) => {
		response.send(utils.createResult(error, data));
	});
});

// Delete Payment
router.delete('/payment/:pay_id', (request, response) => {
	const { pay_id } = request.params;
	const statement = `DELETE FROM payment WHERE pay_id = '${pay_id}'`;
	db.execute(statement, (error, data) => {
		response.send(utils.createResult(error, data));
	});
});

module.exports = router;
