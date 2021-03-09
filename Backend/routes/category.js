const { request, response } = require('express')
const express = require('express')
const db = require('../db')
const utils = require('../utils')

// router will be used to add routes in the app server
const router = express.Router()

// Get Category Details
router.get('/category', (request, response) => {
  const statement = `SELECT cat_id, title, description FROM category`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

//Insert new categoty
router.post('/category', (request, response) => {
  const { title, description } = request.body
  const statement = `INSERT INTO category(title, description) VALUES('${title}', '${description}')`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

//Update Category
router.put('/category/:id', (request, response) => {
  const { title, description } = request.body
  const { id } = request.params
  const statement = `UPDATE category SET title = '${title}', description = '${description}' WHERE cat_id = '${id}'`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

// Delete Category
router.delete('/category/:id', (request, response) => {
  const { id } = request.params
  const statement = `DELETE FROM category WHERE cat_id = '${id}'`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

module.exports = router
