import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'
import lodash from 'lodash'

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)

// Read data from JSON file, this will set db.data content



export const getAllProductIds = async () => {
  await db.read()
  db.chain = lodash.chain(db.data)
  return await db.chain.get('products').map((product) => product.id).value()
}

export const getProduct = async (id) =>{
  await db.read()
  db.chain = lodash.chain(db.data)
  return await db.chain.get('products').find({ id }).value()
}

export const getProductByCategory = async (categoryId) =>{
  await db.read()
  db.chain = lodash.chain(db.data)
  return await db.chain.get('products').filter((product) => product.categoryIds.includes(categoryId) && product.isActive).value()
}

export const updateProduct = async (product) => {
  await db.read()
  db.chain = lodash.chain(db.data)
  //db.chain.get('products').find({id: product.id}).update()
  await db.write()
}

export const newProduct = async (product) => {
  await db.read()
  db.chain = lodash.chain(db.data)
  db.chain.get('products').push({product})
  await db.write()
}

export const getUser = async (email, password) => {
  await db.read()
  db.chain = lodash.chain(db.data)
  return await db.chain.get('users').find({ email, password }).value()
}

export const registerUserToDataBase = async (username, email, password) => {
  
  await db.read()

   await db.data.users.push({
    "id": Math.ceil(200 * Math.random()),
    "name": username,
    "password": password,
    "email": email,
    "isAdmin": false,
    "avatarId": Math.ceil(5 * Math.random())
  })

  await db.write()
}

export const saveToken = async (token) => {

  await db.read()
  db.chain = await lodash.chain(db.data)
  await db.chain.get('tokens').push({token}).value()
  await db.write()
}

export const getToken = async (token) => {
  await db.read()
  db.chain = lodash.chain(db.data)
  return await db.chain.get('tokens').find({token}).value()
}

export const userByEmail = async (email) => {
  await db.read()
  db.chain = lodash.chain(db.data)
  return await db.chain.get('users').find({email}).value()
}

export const deleteToken = async (token) =>{
  await db.read()
  db.chain = await lodash.chain(db.data)
  await db.chain.get('tokens').remove({token}).value()
  await db.write()
}

export const getPicture = async (id) => {
  await db.read()
  db.chain = lodash.chain(db.data)
  return await db.chain.get('pictures').find({ id }).value()
}

export const getPictureListById = async (idArray) => {
  await db.read()
  db.chain = lodash.chain(db.data)
  return await db.chain.get('pictures').filter((picture) => idArray.includes(picture.id)).value()
}

export const newPicture = async (picture) => {
  await db.read()
  db.chain = lodash.chain(db.data)
  await db.chain.get('pictures').push({picture}).value()
  await db.write()
}

export const getAgencyById = async (agencyId) => {
  await db.read()
  db.chain = lodash.chain(db.data)
  return await db.chain.get('agencies').find({id:agencyId}).value().name
}
export const getLastFreeOrderId = async () => {
  await db.read()
  db.chain = lodash.chain(db.data)
  return await db.chain.get('orders').map((order)=>order.id).value().sort().pop() + 1
}

export const getOrders = async (email) =>{
  await db.read()
  db.chain = lodash.chain(db.data)
  return await db.chain.get('orders').filter({userEmail:email}).value()
}

export const getOneOrder = async (id) =>{
  await db.read()
  db.chain = lodash.chain(db.data)
  return await db.chain.get('orders').find({id}).value()
}

export const registerOrder = async (orderObject) => {
  await db.read()
  db.chain = lodash.chain(db.data)
  await db.chain.get('orders').push({...orderObject}).value()
  await db.write()
}
