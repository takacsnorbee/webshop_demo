import { getAllProductIds, 
    getUser, 
    registerUserToDataBase, 
    saveToken, 
    getToken, 
    userByEmail, 
    deleteToken, 
    getProduct, 
    getProductByCategory, 
    getPicture, 
    getPictureListById, 
    updateProduct, 
    getAgencyById, 
    getOrders, 
    getOneOrder, 
    getLastFreeOrderId,
    registerOrder,
 } from "./CRUD.js"
import { responseProduct } from "./models/responseProduct.js"
import { ResponseUser } from "./models/responseUser.js"
import { dbOrderObject } from "./models/dbOrderType.js"

export const getAllProductsByCategory = async (categoryId) => {
    const products = await getProductByCategory(categoryId)
    const output = []

    if (parseInt(categoryId) === NaN && parseInt(categoryId) >= 0) {
        return output
    }

    for (const product of products) {
        product.pictures = await getPictureListById(product.pictureIds)
        product.header = await getPicture(product.headerPicId)
        product.agencyName = await getAgencyById(product.agencyId)
        product.isValid = true
        output.push(new responseProduct(product))
    }
    return output

}

export const getProductById = async (productId) => {

    if (parseInt(productId) !== NaN && parseInt(productId) >= 0) {

        const product = await getProduct(productId)
        if (product) {
            product.pictures = await getPictureListById(product.pictureIds)
            product.header = await getPicture(product.headerPicId)
            product.agencyName = await getAgencyById(product.agencyId)
            product.isValid = true
            return new responseProduct(product)
        }
        return new responseProduct({})

    }
    return new responseProduct({})


}

export const addNewProduct = async (product) => {

}

export const updateExistingProduct = async (product) => {
    return await updateProduct(product)
}

export const registerToken = async (token) => {
    await saveToken(token)
}

export const getUserByEmailPassword = async (email, password) => {
    const user = await getUser(email, password)
    return user ? new ResponseUser(user) : undefined
}


export const registerUser = async (username, email, password) => {
    return await registerUserToDataBase(username, email, password)
}

export const isExistToken = async (checkedToken) => {
    return await getToken(checkedToken) ? true : false
}

export const getUserByEmail = async (checkedEmail) => {
    const user = await userByEmail(checkedEmail)
    return user ? new ResponseUser(user) : undefined
}

export const deleteUserByEmail = async (checkedEmail) => {

}

export const deleteTokenFromList = async (checkedToken) => {
    await deleteToken(checkedToken)
}

export const getOrdersByEmail = async (email) => {
    let orders = await getOrders(email)
    const output = []

    for (const order of orders) {
        const productList = []

        for (const productId of order.products) {
            let prod = await getProductById(productId)
            productList.push(prod)
        }

        output.push({ ...order, products: productList })
    }

    return output
}

export const getOrderById = async (id) => {
    const order = await getOneOrder(id)

    if (order) {
        const productList = []
        for (const productId of order.products) {
            let prod = await getProductById(productId)
            productList.push(prod)
        }

        return { ...order, products: productList }
    }

    return {}
}

export const registerOrderByEmail = async (email, order) => {

    if(Object.keys(order).length === 0) throw new Error('Server error')
    const { productIds } = order
    if(productIds.length === 0) throw new Error('Order list s empty')
    if(!await isEveryProductExist(productIds)) throw new Error('Product Id does not exist')

    const lastID = await getLastFreeOrderId()
    const orderForDB = new dbOrderObject({ id: lastID, userEmail: email, productIds })
    await registerOrder(orderForDB)
    return await getOrders(email)
}

const isEveryProductExist = async (newProductIds) => {
   const allProductId = await getAllProductIds()
   const checkedIds = newProductIds.map((newProductId) => allProductId.includes(newProductId))
   console.log('Checked', checkedIds)
   return !checkedIds.includes(false)
}

