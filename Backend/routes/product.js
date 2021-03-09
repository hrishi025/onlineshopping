const express = require('express')
const db = require('../db')
const utils = require('../utils')

// router will be used to add routes in the app server
const router = express.Router()

//Get All Products
router.get('/product', (request, response) => {
  const statement = `SELECT  product_id, product_title, 
   product_spec, product_price, product_cat_id,
   product_company_id, product_quantity FROM product`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

// Add New Product
router.post('/product', (request, response) => {
  const {
    product_title,
    product_spec,
    product_price,
    product_cat_id,
    product_company_id,
    product_quantity,
  } = request.body
  const statement = `INSERT INTO product (product_title, 
      product_spec, product_price, product_cat_id,
      product_company_id, product_quantity) VALUES 
         ('${product_title}','${product_spec}', '${product_price}', '${product_cat_id}', '${product_company_id}','${product_quantity}')`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

// Update Product
router.put('/product/:product_id', (request, response) => {
  const { product_id } = request.params
  const {
    product_title,
    product_spec,
    product_price,
    product_cat_id,
    product_company_id,
    product_quantity,
  } = request.body
  const statement = `UPDATE product SET 
   product_title = '${product_title}',
   product_spec = '${product_spec}', 
   product_price = '${product_price}',
   product_cat_id = '${product_cat_id}',
   product_company_id = '${product_company_id}',
   product_quantity = '${product_quantity}'
   where product_id = ${product_id}`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

//Delete Product
router.delete('/product/:product_id', (request, response) => {
  const { product_id } = request.params

  const statement = `DELETE FROM product where product_id = ${product_id}`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

module.exports = router
