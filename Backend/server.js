const express = require('express')
const bodyParser = require('body-parser')

// list of routers
const routerUser = require('./routes/user')
const routerCategory = require('./routes/category')

const app = express()

//to convert JSON data to string
app.use(bodyParser.json())

// enable frontend application to call the APIs

// add routers
app.use('/user', routerUser)
app.use(routerCategory)

app.get('/', (request, response) => {
  response.send('welcome to ecommerce application')
})

app.listen(4000, '0.0.0.0', () => {
  console.log(`server started on port 4000`)
})
