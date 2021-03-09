const express = require('express')
const bodyParser = require('body-parser')

// list of routers
const routerUser = require('./routes/user')
const routerCategory = require('./routes/category')
const routerCart = require('./routes/cart')
const routerCompany = require('./routes/company')
const routerAddress = require('./routes/address')

const app = express()

//to convert JSON data to string
app.use(bodyParser.json())

// enable frontend application to call the APIs

// add routers
app.use('/user', routerUser)
app.use(routerCategory)
app.use(routerCart)
app.use(routerCompany)
app.use(routerAddress)

app.get('/', (request, response) => {
  response.send('welcome to ecommerce application')
})

app.listen(4000, '0.0.0.0', () => {
  console.log(`server started on port 4000`)
})
