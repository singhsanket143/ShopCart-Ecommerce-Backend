function errorResponse(message, error) {
    return {
            success: false,
            data: {},
            message: message,
            error: error
        }
}

module.exports = errorResponse;