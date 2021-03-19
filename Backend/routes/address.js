const express = require('express');
const db = require('../db');
const utils = require('../utils');

// router will be used to add routes in the app server
const router = express.Router();

// Get Address Details
router.get('/address', (request, response) => {
	const statement = `SELECT * FROM address where user_id=${request.id}`;
	db.execute(statement, (error, data) => {
		response.send(utils.createResult(error, data));
	});
});

//Insert new address
router.post('/address', (request, response) => {
	const { address, city, state, country, pin } = request.body;
	const statement = `INSERT INTO address(user_id, address, city, state, country, pin) VALUES('${request.id}', '${address}', '${city}', '${state}', '${country}', '${pin}')`;
	db.execute(statement, (error, data) => {
		response.send(utils.createResult(error, data));
	});
});

//Update Address
router.put('/address/:id', (request, response) => {
	const { address, city, state, country, pin } = request.body;
	const { id } = request.params;
	const statement = `UPDATE address SET address = '${address}', city = '${city}', state = '${state}', country = '${country}', pin = '${pin}' where user_id=${response.id}`;
	db.execute(statement, (error, data) => {
		response.send(utils.createResult(error, data));
	});
});

// Delete address
router.delete('/address', (request, response) => {
	const { id } = request.params;
	const statement = `DELETE FROM address where user_id=${response.id}`;
	db.execute(statement, (error, data) => {
		response.send(utils.createResult(error, data));
	});
});

module.exports = router;
