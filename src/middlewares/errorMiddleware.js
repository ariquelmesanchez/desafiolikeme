
const errors = require('../helpers/errorsManagers')

const errorMiddleware = async(err, req, res, next) => {
    try {
        console.log(err)
        const errorDetails = errors[err.message]
        res.status(errorDetails.code).json(errorDetails)
        
    } catch (error) {
    console.error(error)    
    }
}

module.exports = {
    errorMiddleware
}