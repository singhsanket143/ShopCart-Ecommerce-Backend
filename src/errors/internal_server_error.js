const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class InternalServerError extends Error {
    constructor() {
        const errorMessage = 'Something went wrong, please try again later!';
        super(errorMessage);
        this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
        this.reason = ReasonPhrases.INTERNAL_SERVER_ERROR;
        this.errorMessage = errorMessage;
        this.name = "InternalServerError";
    }
}

module.exports = InternalServerError;