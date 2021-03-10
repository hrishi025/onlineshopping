const express = require('express');
const db = require('../db');
const utils = require('../utils');

// router will be used to add routes in the app server
const router = express.Router();

// Get myorder Details
router.get('/myorder', (request, response) => {
	const statement = `SELECT myorder_id, user_id, orderDate, status FROM myorder`;
	db.execute(statement, (error, data) => {
		response.send(utils.createResult(error, data));
	});
});

//Insert new myorder
router.post('/myorder', (request, response) => {
	const { user_id, orderDate } = request.body;
	const statement = `INSERT INTO myorder(user_id, orderDate) VALUES('${user_id}', '${orderDate}')`;
	db.execute(statement, (error, data) => {
		response.send(utils.createResult(error, data));
	});
});

//Update myorder
router.put('/myorder/:myorder_id', (request, response) => {
	const { status } = request.body;
	const { myorder_id } = request.params;
	const statement = `UPDATE myorder SET status = '${status}' WHERE myorder_id = '${myorder_id}'`;
	db.execute(statement, (error, data) => {
		response.send(utils.createResult(error, data));
	});
});

// Delete myorder
router.delete('/myorder/:myorder_id', (request, response) => {
	const { myorder_id } = request.params;
	const statement = `DELETE FROM myorder WHERE myorder_id = '${myorder_id}'`;
	db.execute(statement, (error, data) => {
		response.send(utils.createResult(error, data));
	});
});

module.exports = router;
