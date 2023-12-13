const BadRequest = require("../errors/bad_request_error")
const errorResponse = require("../utils/error_response")

function createProductValidator(req, res, next) {
    if(!req.body.title) {
        return res.status(400).json(errorResponse('Title not present in the incoming request', new BadRequest("Title")))
    }

    if(!req.body.description) {
        return res.status(400).json(errorResponse('description not present in the incoming request', new BadRequest("Description")))
    }

    if(!req.body.price) {
        return res.status(400).json(errorResponse('Price not present in the incoming request', new BadRequest("Price")))
    }

    if(!req.body.image) {
        return res.status(400).json(errorResponse('Image not present in the incoming request', new BadRequest("Image")))
    }

    if(!req.body.category) {
        return res.status(400).json(errorResponse('Category not present in the incoming request', new BadRequest("Category")))
    }

    // If everything looks good
    next();
}

module.exports = {
    createProductValidator
}