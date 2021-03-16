const { request, response } = require('express')
const express = require('express')
const db = require('../db')
const utils = require('../utils')

// router will be used to add routes in the app server
const router = express.Router()

module.exports = router

//Get Orderdetails Contents
router.get('/orderdetails/:myorder_id', (request, response) => {
  const { myorder_id } = request.params
  const statement = `SELECT * FROM orderdetails where myorder_id = ${myorder_id}`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

//Get Orderdetails to Admin
router.get('/orderdetails', (request, response) => {
  const statement = `SELECT * FROM orderdetails` // where myorder_id = ${myorder_id}`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

//Insert new content in Orderdetails
router.post('/rateProduct', (request, response) => {
  const { orderdetails_id, myorder_id, rating, comment } = request.body
  const statement = `UPDATE orderdetails SET rating = ${rating}, comment = '${comment}' where orderdetails_id =  ${orderdetails_id}`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

//Get rating Contents
router.get('/rating', (request, response) => {
  const statement = `
	select round(avg(rating)*(100/count(rating)),2) as Customer_satisfaction from orderdetails`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

//Get max product Contents
router.get('/max/product/sales', (request, response) => {
  const statement = `
	
select p.prod_title,sum(o.quantity) as no_of_sale_product from orderdetails as o inner join product as p on o.product_id=p.prod_id group by product_id order by 2 desc`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

//Get max product Contents
router.get('/month/revenue', (request, response) => {
  const statement = `select  substring(m.orderDate,1,7) as month,sum(o.price) as revenue from orderdetails as o inner join myorder as m on o.myorder_id=m.myorder_id group by month`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})
