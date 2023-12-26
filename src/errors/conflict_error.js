const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class ConflictError extends Error {
    constructor(resource, conflicts) {
        const errorMessage = `Request cannot be completed because request contains conflicting data with ${resource} resource`;
        super(errorMessage);
        this.statusCode = StatusCodes.CONFLICT;
        this.reason = ReasonPhrases.CONFLICT;
        this.errorMessage = errorMessage;
        this.name = "ConflictError";
        this.conflicts = conflicts;

    }
}

module.exports = ConflictError;