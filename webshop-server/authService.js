import jwt from 'jsonwebtoken'
import { isExistToken } from './dataBaseController.js'

export const generateToken = (email, isAdmin) => {
    return jwt.sign({ email, isAdmin }, process.env.TOKEN_SECRET, { expiresIn: '1h' })
}

export const loginValidator = async (userEmail, userPassword) => {
    const isEmailInValid = !regXChecker(patterns['email'], userEmail)
    const isPasswordInValid = !regXChecker(patterns['password'], userPassword)

    console.log('Regx', isEmailInValid, isPasswordInValid, userEmail, userPassword)

    if (userEmail && userPassword) {
        if (isEmailInValid || isPasswordInValid) {
            return { isValid: false, message: `${isEmailInValid ? 'Email ' : ''}${isPasswordInValid ? 'Password ' : ''} is invalid` }
        } else {
            console.log('TRUEEEE')
            return { isValid: true }
        }

    }
    return { isValid: false, message: `${!userEmail ? 'Email ' : ''}${!userPassword ? 'Password ' : ''} is missing` }

}

export const registrationValidator = async (userName, userEmail, userPassword) => {
    const isUserNameInValid = !regXChecker(patterns['username'], userName)
    const isEmailInValid = !regXChecker(patterns['email'], userEmail)
    const isPasswordInValid = !regXChecker(patterns['password'], userPassword)


    if (userEmail && userPassword) {
        if (isUserNameInValid || isEmailInValid || isPasswordInValid) {
            return { isValid: false, message: `${isUserNameInValid ? 'Username ' : ''}${isEmailInValid ? 'Email ' : ''}${isPasswordInValid ? 'Password ' : ''} is invalid` }
        } else {
            return { isValid: true }
        }

    }
    return { isValid: false, message: `${!userName ? 'Email ' : ''}${!userEmail ? 'Email ' : ''}${!userPassword ? 'Password ' : ''} is missing` }

}


export const regXChecker = (pattern, input) => {
    return new RegExp(pattern, 'g').test(input)
}

const patterns = {
    'email': /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])\w+/g,
    'password': /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g,
    'username': /^[a-zA-Z0-9]+$/g
}

export const tokenValidator = async (token) => {

    const isvalidResponse = isJsonValid(token)
    console.log(isvalidResponse)
    const isExistMessage = await isExistToken(token) ? { isExist: true } : { valid: false, error: 'Session is not exist' }

    return isvalidResponse.error ? { valid: false, error: isvalidResponse.error } : isExistMessage

}


export const isJsonValid = (token) => {

    try {
        const { email, isAdmin } = jwt.verify(token, process.env.TOKEN_SECRET)
        return { email, isAdmin }

    } catch (error) {
        console.log('Error', error.message)

        switch (error.message) {
            case 'jwt expired':
                return { error: 'session expired' }

            case 'invalid signature':
                return { error: 'invalid user' }

            default:
                return { error: error.message }
        }
    }

}


export const getDataFromToken = (token)=>{
    let {email , isAdmin} = isJsonValid(token)
    return {email , isAdmin}
}

