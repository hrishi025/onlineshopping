const { request, response } = require('express')
const express = require('express')
const db = require('../db')
const utils = require('../utils')

// router will be used to add routes in the app server
const router = express.Router()

module.exports = router

//Get Orderdetails Contents
router.get('/orderdetails', (request, response) => {
  const statement = `SELECT * FROM orderdetails`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

//Insert new content in Orderdetails
router.post('/orderdetails', (request, response) => {
  const { rating, comment } = request.body
  //const statement = `INSER INTO orderdetails(user_id, prod_id, cart_quanity) VALUES('${user_id}', '${prod_id}', '${cart_quanity}') `
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})
