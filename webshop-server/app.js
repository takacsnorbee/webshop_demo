import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const port = 3000
import { 
  loginUser,
  registerNewUser,
  getProductsByCategory,
  getUserData,
  logoutUser,
  getOneProductById,
  getOrdersForUser,
  getOrder,
  registerOrder } from './viewController.js'

import cors from 'cors'
app.use(cors())
import cookieParser from 'cookie-parser'
app.use(cookieParser())
import bodyParser from 'body-parser'
app.use(express.json()) 
app.use(bodyParser.urlencoded({ extended: false }))

import  { userJwtValidator, adminJwtValidator }  from './midlewares.js'


app.post('/login', loginUser)

app.get('/user', userJwtValidator, getUserData)

app.post('/registration', registerNewUser)

app.get('/logout', userJwtValidator, logoutUser)


app.get('/products', getProductsByCategory)

app.get('/product', getOneProductById)

app.post('/product', adminJwtValidator,)

app.post('/update-product', adminJwtValidator,)


app.get('/order', userJwtValidator, getOrder)

app.get('/orders', userJwtValidator, getOrdersForUser)

app.post('/order', userJwtValidator, registerOrder)

app.post('/update-order', userJwtValidator,)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})