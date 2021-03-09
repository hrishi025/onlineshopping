const express = require('express')
const db = require('../db')
const utils = require('../utils')

// router will be used to add routes in the app server
const router = express.Router()

// Get Company Details
router.get('/company', (request, response) => {
  const statement = `SELECT com_id, title, description FROM company`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

//Insert new categoty
router.post('/company', (request, response) => {
  const { title, description } = request.body
  const statement = `INSERT INTO company(title, description) VALUES('${title}', '${description}')`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

//Update Category
router.put('/company/:id', (request, response) => {
  const { title, description } = request.body
  const { id } = request.params
  const statement = `UPDATE company SET title = '${title}', description = '${description}' WHERE com_id = '${id}'`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

// Delete Category
router.delete('/company/:id', (request, response) => {
  const { id } = request.params
  const statement = `DELETE FROM company WHERE com_id = '${id}'`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

module.exports = router
