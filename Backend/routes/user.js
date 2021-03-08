const express = require('express')
const db = require('../db')
const config = require('../config')
const utils = require('../utils')

const router = express.Router()

//Signup
router.post('/signup', (request, response) => {
  const { name, email, phone, password } = request.body // get sign up details from request
  const statement = `insert into user(name, email, phone, password) values('${name}','${email}','${phone}','${password}')`
  db.execute(statement, (error, data) => {
    // result
    const result = utils.createResult(error, data)
    if (!error) {
      // mailer.sendEmail(
      //   'signup.html',
      //   'welcome to ecommerce application',
      //   email,
      //   (error, info) => {
      //     response.send(result)
      //   }
      // )
      response.send(result)
      console.log("Signup Successful")
    } else {
      response.send(result)
    }

  })
})

module.exports = router
