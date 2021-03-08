const express = require('express')
const db = require('../db')
const config = require('../config')
const utils = require('../utils')
const crypto = require('crypto-js')

const router = express.Router()

//Signup
router.post('/signup', (request, response) => {
  const { name, email, phone, password } = request.body // get sign up details from request
  // Password Encryption
  const encPwd = '' + crypto.SHA256(password)
  const statement = `insert into user(name, email, phone, password) values('${name}','${email}','${phone}','${encPwd}')`
  console.log(encPwd)
  db.execute(statement, (error, data) => {
    // result
    const result = utils.createResult(error, data)

    // mailer.sendEmail(
    //   'signup.html',
    //   'welcome to ecommerce application',
    //   email,
    //   (error, info) => {
    //     response.send(result)
    //   }
    // )
    response.send(result)
    console.log('Signup Successful')
  })
})

//Signin
router.post('/signin', (request, response) => {
  const { email, password } = request.body
  const encPwd = '' + crypto.SHA256(password)
  const statement = `SELECT * FROM user where email = '${email}' AND password = '${encPwd}'`
  db.execute(statement, (error, data) => {
    // result
    const result = utils.createResult(error, data)
    response.send(result)
    console.log(result)
  })
})

module.exports = router
