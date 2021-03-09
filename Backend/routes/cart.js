const { request, response } = require('express')
const express = require('express')
const db = require('../db')
const utils = require('../utils')

// router will be used to add routes in the app server
const router = express.Router()

module.exports = router

//Get Cart Contents
router.get('/cart', (request, response) => {
  const statement = ``
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

//Insert new content in Cart
router.post('/cart', (request, response) => {
  const {} = request.body
  const statement = ``
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

//Update Cart
router.put('/cart/:id', (request, response) => {
  const {} = request.body
  const { id } = request.params
  const statement = ``
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

// Delete Category
router.delete('/cart/:id', (request, response) => {
  const { id } = request.params
  const statement = `DELETE FROM cart WHERE id = '${id}'`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})
