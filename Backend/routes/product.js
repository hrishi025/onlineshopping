const { request, response } = require('express')
const express = require('express')
const db = require('../db')
const utils = require('../utils')

// router will be used to add routes in the app server
const router = express.Router()

//Get All Products
router.get('/product', (request, response) => {
  const statement = `SELECT  prod_id, prod_title, 
   prod_description, prod_price, cat_id,
   comp_id, prod_qty FROM product`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

// Add New Product
router.post('/product', (request, response) => {
  const {
    prod_title,
    prod_description,
    cat_id,
    prod_price,
    comp_id,
    prod_qty,
  } = request.body
  const statement = `INSERT INTO product (prod_title, 
    prod_description, cat_id, prod_price,
      comp_id, prod_qty) VALUES 
         ('${prod_title}','${prod_description}', '${cat_id}', '${prod_price}', '${comp_id}','${prod_qty}')`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

// Update Product
router.put('/product/:prod_id', (request, response) => {
  const { prod_id } = request.params
  const {
    prod_title,
    prod_description,
    cat_id,
    prod_price,
    comp_id,
    prod_qty,
  } = request.body
  const statement = `UPDATE product SET 
   prod_title = '${prod_title}',
   prod_description = '${prod_description}', 
   cat_id = '${cat_id}',
   prod_price = '${prod_price}',
   comp_id = '${comp_id}',
   prod_qty = '${prod_qty}'
   WHERE prod_id = ${prod_id}`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

//Delete Product
router.delete('/product/:prod_id', (request, response) => {
  const { prod_id } = request.params

  const statement = `DELETE FROM product where prod_id = ${prod_id}`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

router.patch('/product/quantity/:prod_id',(request, response)=>
{
  const { prod_id } = request.params
  const { quantity } = request.body

  const statement = `update product set prod_qty = ${quantity} where prod_id = ${prod_id}`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

router.patch('/product/price/:prod_id',(request, response)=>
{
  const { prod_id } = request.params
  const { price } = request.body

  const statement = `update product set prod_price = ${price} where prod_id = ${prod_id}`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})
module.exports = router
