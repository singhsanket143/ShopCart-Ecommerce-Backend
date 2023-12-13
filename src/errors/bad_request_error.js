class BadRequest extends Error {
    constructor(propertyMissing) {
        const errorMessage = `${propertyMissing} is missing from the request body`
        super(errorMessage);
        this.statusCode = 400;
        this.errorMessage = errorMessage;
    }
}

module.exports = BadRequest;