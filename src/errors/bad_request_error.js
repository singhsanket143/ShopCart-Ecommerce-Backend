const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class BadRequest extends Error {
    constructor(property, invalidProperty = null, reason = null) {

        const errorMessage = (invalidProperty) ? `${property} is invalid in the request` : `${property} is missing from the request body`
        super(errorMessage);
        this.statusCode = StatusCodes.BAD_REQUEST;
        this.reason = (reason) ? reason : ReasonPhrases.BAD_REQUEST;
        this.errorMessage = errorMessage;
        this.name = "BadRequest";
    }
}

module.exports = BadRequest;