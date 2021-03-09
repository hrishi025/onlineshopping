const express = require('express')
const db = require('../db')
const config = require('../config')
const utils = require('../utils')
const crypto = require('crypto-js')
const mailer = require('../mailer')

// router will be used to add routes in the app server
const router = express.Router()

//Signup
router.post('/signup', (request, response) => {
  const { name, email, phone, password } = request.body // get sign up details from request
  // Password Encryption`
  const encPwd = '' + crypto.SHA256(password)
  const statement = `INSERT INTO user(user_name, user_email, user_phone, user_password) values('${name}','${email}','${phone}','${encPwd}')`
  console.log(encPwd)
  db.execute(statement, (error, data) => {
    // result
    const result = utils.createResult(error, data)

    if (!error) {
      // const stmt = `SELECT id FROM user WHERE email = '${email}'`
      // db.execute(stmt, (error, data) => {
      //   // result
      //   const res = utils.createResult(error, data)
      //   console.log(res.data.BinaryRow.id)
      //   console.log('res ' + res.data.id)
      // })
      mailer.sendEmail(
        //'signup.html',
        'welcome to ecommerce application',
        `Confirm Your Email <a href='http://localhost:4000/user/verify/${email}'>Here</a>`,
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

  const statement = `SELECT * FROM user WHERE user_email = '${email}' and user_password = '${encryptedPassword}'`

  db.execute(statement, (error, users) => {
    const result = {
      status: '',
    }

    if (error != null) {
      // error while executing statement
      result['user_status'] = 'error'
      result['error'] = error
    } else {
      if (users.length == 0) {
        // user does not exist
        result['user_status'] = 'error'
        result['error'] = 'User does not exist'
      } else {
        const user = users[0]

        // check the user status
        // 0: non-verified, 1: active, 2: suspended
        if (user['user_status'] == 0) {
          result['user_status'] = 'error'
          result['error'] =
            'You have not verified your account yet. Please verify your account.'
        } else if (user['user_status'] == 2) {
          result['user_status'] = 'error'
          result['error'] =
            'Your account is suspended, please contact administrator'
        } else {
          const payload = { id: user['user_id'] }
          //const token = jwt.sign(payload, config.secret)

          result['user_status'] = 'success'
          result['data'] = {
            // token: token,
            name: user['user_name'],
            email: user['user_email'],
            phone: user['user_phone'],
          }
        }
      }

      response.send(result)
    }
  })
})

//verify Email
router.get('/verify/:email', (request, response) => {
  const { email } = request.params
  const statement = `UPDATE user SET user_status = 1 where user_email = '${email}'`
  db.execute(statement, (error, data) => {
    // result
    const result = utils.createResult(error, data)
    response.send(result)
  })
})

module.exports = router
