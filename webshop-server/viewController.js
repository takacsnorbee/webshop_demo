import { generateToken, loginValidator, registrationValidator, getDataFromToken } from './authService.js'
import { getAllProductsByCategory, registerToken, getUserByEmailPassword, registerUser, getUserByEmail, deleteTokenFromList, getProductById, getOrdersByEmail, getOrderById, registerOrderByEmail } from './dataBaseController.js'

export const loginUser = async (req, res) => {

    const { email, password } = req.body

    const isValidUser = await loginValidator(email, password)
    console.log('isvalid', isValidUser)
    if (isValidUser.isValid) {

        const user = await getUserByEmailPassword(email, password)
        if (user) {
            const token = generateToken(email, false)
            await registerToken(token)
            res.status(200).json({ token: token, user: user })
        } else {
            res.status(401).json({ error: 'Unauthorized' })
        }

    } else {
        res.status(401).json({ error: isValidUser.message })
    }
}

export const registerNewUser = async (req, res) => {
    const { username, email, password } = req.body
    const isValidUser = await registrationValidator(username, email, password)
    const isExistUser = await getUserByEmail(email) ? true : false

    if (isExistUser) {
        res.status(401).json({ error: 'User is exist' })
    } else {
        if (isValidUser.isValid) {
            await registerUser(username, email, password)

            const user = await getUserByEmailPassword(email, password)

            if (user) {
                const { name, email, isAdmin } = user
                const token = generateToken(email, false)
                await registerToken(token)
                res.status(200).json({ token: token, user: { name, email, isAdmin } })
            } else {
                res.status(401).json({ error: 'Unauthorized' })
            }
        } else {
            res.status(401).json({ error: isValidUser.message })
        }
    }


}

export const getProductsByCategory = async (req, res) => {

    const { query } = req
    const products = await getAllProductsByCategory(parseInt(query.category))


    res.status(200).json({ products })
}

export const getOneProductById = async (req, res) => {
    const { query } = req
    const product = await getProductById(parseInt(query.id))

    res.status(200).json({ product })
}

export const postProduct = async (req, res) => {
    const { body } = req
    res.sendStatus(200)
}

export const getUserData = async (req, res) => {
    const { email } = getDataFromToken(req.headers['authorization'].split(' ')[1])
    const userData = await getUserByEmail(email)
    if (userData) {
        res.status(200).json(userData)
    } else {
        res.status(401).json({ error: 'Unauthorized' })
    }
}

export const logoutUser = async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1]
    try {
        await deleteTokenFromList(token)
        res.status(200).json({ isSuccess: true })
    } catch (error) {
        res.status(401).json({ error: 'Server error' })
    }
   
}

export const getOrdersForUser = async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1]

    try {
        const { email } = await getDataFromToken(token)
        const orderList = await getOrdersByEmail(email)
        res.status(200).json({ orders: orderList })

    } catch (error) {
        res.status(401).json({ error: 'Server error' })
    }
}

export const getOrder = async (req, res) => {
    const { query } = await req
    const id = parseInt(query.id)
    try {
        const order = await getOrderById(id)
        res.status(200).json({ order })
    } catch (error) {
        res.status(401).json({ error: 'Server error' })
    }


}


export const registerOrder = async (req, res) => {
    const {body} = req
    const { email } = getDataFromToken(req.headers['authorization'].split(' ')[1])
    try {
        const newOrders = await registerOrderByEmail(email, body)
        console.log('New Orders', newOrders)
        res.status(200).json({orders: newOrders})
    } catch (error) {
        console.log("Error", error.message)
        res.status(401).json({ error: error.message })
    }
}