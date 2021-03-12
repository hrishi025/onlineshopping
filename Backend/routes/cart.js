const { request, response } = require('express');
const express = require('express');
const db = require('../db');
const utils = require('../utils');

// router will be used to add routes in the app server
const router = express.Router();

module.exports = router;

//Get Cart Contents
router.get('/cart', (request, response) => {
	const statement = `SELECT cart_id, user_id, prod_id, cart_quantity FROM cart where user_id = ${request.id}`;
	db.execute(statement, (error, data) => {
		response.send(utils.createResult(error, data));
	});
});

//Insert new content in Cart
router.post('/cart', (request, response) => {
	const { prod_id, cart_quantity } = request.body;
	console.log(request.body)
	const statement = `INSERT INTO cart(user_id, prod_id, cart_quantity) VALUES('${request.id}', '${prod_id}', '${cart_quantity}') `;
	db.execute(statement, (error, data) => {
		response.send(utils.createResult(error, data));
	});
});

//Update Cart
router.put('/cart/:cart_id', (request, response) => {
	const { cart_quantity } = request.body;
	const { cart_id } = request.params;
	const statement = `UPDATE cart SET cart_quantity = '${cart_quantity}' WHERE cart_id = '${cart_id}' and user_id=${request.id}`;
	db.execute(statement, (error, data) => {
		response.send(utils.createResult(error, data));
	});
});

// Delete Cart
router.delete('/cart/:cart_id', (request, response) => {
	const { cart_id } = request.params;
	const statement = `DELETE FROM cart WHERE cart_id = '${cart_id}' and user_id =${request.id} `;
	db.execute(statement, (error, data) => {
		response.send(utils.createResult(error, data));
	});
});
