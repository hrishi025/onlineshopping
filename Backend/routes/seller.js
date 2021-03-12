const { request, response } = require('express');
const express = require('express');
const db = require('../db');
const utils = require('../utils');

// router will be used to add routes in the app server
const router = express.Router();

//apply for seller
router.patch('/seller/apply', (request, response) => {
	const statement = `update user set user_role ='CUSTSELL' where user_id = ${request.id}`;
	db.execute(statement, (error, data) => {
		response.send(utils.createResult(error, data));
	});
});

module.exports = router;