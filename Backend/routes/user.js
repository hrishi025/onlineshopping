const express = require('express')
const db = require('../db')
const config = require('../config')
const utils = require('../utils')
const crypto = require('crypto-js')
const mailer = require('../mailer')

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

    if (!error) {
      mailer.sendEmail(
        'signup.html',
        'welcome to ecommerce application',
        email,
        (error, info) => {
          response.send(result)
        }
      )
      console.log('Inide user mailer send')
    } else {
      response.send(result)
    }
  })
})

//Signin
router.post('/signin', (request, response) => {
  const { email, password } = request.body

  // encrypt the password
  const encryptedPassword = '' + crypto.SHA256(password)

  const statement = `SELECT * from USER WHERE email = '${email}' and password = '${encryptedPassword}'`

  db.execute(statement, (error, users) => {
    const result = {
      status: ''
    }

    if (error != null) {
      // error while executing statement
      result['status'] = 'error'
      result['error'] = error
    } else {
      if (users.length == 0) {
        // user does not exist
        result['status'] = 'error'
        result['error'] = 'User does not exist'
      } else {
        const user = users[0]

        // check the user status
        // 0: non-verified, 1: active, 2: suspended
        if (user['status'] == 0) {
          result['status'] = 'error'
          result['error'] =
            'You have not verified your account yet. Please verify your account.'
        } else if (user['status'] == 2) {
          result['status'] = 'error'
          result['error'] =
            'Your account is suspended, please contact administrator'
        } else {
          const payload = { id: user['id'] }
          //const token = jwt.sign(payload, config.secret)

          result['status'] = 'success'
          result['data'] = {
            // token: token,
            name: user['name'],
            email: user['email'],
            phone: user['phone'],
          }
        }
      }

      response.send(result)
    }
  })
})

module.exports = router
