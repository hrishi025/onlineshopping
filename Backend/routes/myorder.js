const express = require('express');
const db = require('../db');
const utils = require('../utils');

// router will be used to add routes in the app server
const router = express.Router();

// Get myorder Details
router.get('/myorder', (request, response) => {
	const statement = `SELECT myorder_id, orderDate, 
	CASE
		WHEN myorder.status = 0 THEN 'not delivered'
		WHEN myorder.status = 1 THEN 'delivered'
		ELSE 'cancelled'
	END AS status 
	FROM myorder where user_id=${request.id}`;
	db.execute(statement, (error, data) => {
		response.send(utils.createResult(error, data));
	});
});

//Update myorder
router.put('/myorder/:myorder_id', (request, response) => {
	const { status } = request.body;
	const { myorder_id } = request.params;
	const statement = `UPDATE myorder SET status = 'CANCELLED WHERE myorder_id = '${myorder_id}'`;
	db.execute(statement, (error, data) => {
		response.send(utils.createResult(error, data));
	});
});

module.exports = router;
