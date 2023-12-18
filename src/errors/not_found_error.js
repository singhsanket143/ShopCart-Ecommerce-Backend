const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class NotFoundError extends Error {
    constructor(resourceName, property, propertyValue) {
        const errorMessage = `The resource: ${resourceName} with ${property} : ${propertyValue} not found!`
        super(errorMessage);
        this.statusCode = StatusCodes.NOT_FOUND;
        this.reason = ReasonPhrases.NOT_FOUND;
        this.errorMessage = errorMessage;
        this.name = "NotFoundError";
    }
}

module.exports = NotFoundError;