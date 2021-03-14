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

// Add New Product
router.post("/seller/add_product", (request, response) => {
	const {
	  prod_title,
	  prod_description,
	  cat_id,
	  prod_price,
	  comp_id,
	  prod_qty,
	} = request.body;
	const statement = `INSERT INTO product (prod_title, 
	  prod_description, cat_id, prod_price,
		comp_id, prod_qty,seller_id) VALUES 
		   ('${prod_title}','${prod_description}', '${cat_id}', '${prod_price}', '${comp_id}','${prod_qty}','${request.id}')`;
	db.execute(statement, (error, data) => {
	  response.send(utils.createResult(error, data));
	});
  });

  
//Get All Products
router.get("/seller/product", (request, response) => {
	const statement = `SELECT  prod_id, prod_title, 
	 prod_description, prod_price, cat_id,
	 comp_id, prod_qty FROM product where seller_id='${request.id}'`;
	db.execute(statement, (error, data) => {
	  response.send(utils.createResult(error, data));
	});
  });

module.exports = router;
