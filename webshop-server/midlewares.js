
import { isJsonValid, tokenValidator } from "./authService.js";


  export const userJwtValidator = async (req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1]
    const message = await await tokenValidator(token)
    if(message.error){
      res.status(401).json(message)
      return
    }
    next()
  }
 
  export const adminJwtValidator = async (req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1]
    const message = await await tokenValidator(token)
    if(message.error){
      res.status(401).json(message)
      return
    }
    next()
  }
