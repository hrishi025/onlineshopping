const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// list of routers
const routerUser = require('./routes/user')
const routerCategory = require('./routes/category')
const routerCart = require('./routes/cart')
const routerCompany = require('./routes/company')
const routerAddress = require('./routes/address')
const routerProduct = require('./routes/product')
const routerOrderdetails = require('./routes/orderdetails')
const routerPayment = require('./routes/payment')
const routermyorder = require('./routes/myorder')

const app = express()

//to convert JSON data to string
app.use(bodyParser.json())

// enable frontend application to call the APIs
app.use(cors('*'))

// add routers
app.use('/user', routerUser)
app.use(routerCategory)
app.use(routerCart)
app.use(routerCompany)
app.use(routerAddress)
app.use(routerProduct)
app.use(routerOrderdetails)
app.use(routerPayment)
app.use(routermyorder)

app.get('/', (request, response) => {
  response.send('welcome to ecommerce application')
})

app.listen(4000, '0.0.0.0', () => {
  console.log(`server started on port 4000`)
})
