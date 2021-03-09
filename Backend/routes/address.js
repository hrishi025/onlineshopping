const express = require('express')
const db = require('../db')
const utils = require('../utils')

// router will be used to add routes in the app server
const router = express.Router()

// Get Address Details
router.get('/address', (request, response) => {
  const statement = `SELECT add_id, user_id, address, city, state, country, pin FROM address`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

//Insert new address
router.post('/address', (request, response) => {
  const { user_id, address, city, state, country, pin } = request.body
  const statement = `INSERT INTO address(user_id, address, city, state, country, pin) VALUES('${user_id}', '${address}', '${city}', '${state}', '${country}', '${pin}')`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

//Update Address
router.put('/address/:id', (request, response) => {
  const { address, city, state, country, pin } = request.body
  const { id } = request.params
  const statement = `UPDATE address SET address = '${address}', city = '${city}', state = '${state}', country = '${country}', pin = '${pin}' WHERE user_id = '${id}'`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

// Delete Category
router.delete('/address/:id', (request, response) => {
  const { id } = request.params
  const statement = `DELETE FROM address WHERE add_id = '${id}'`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

module.exports = router
