function errorResponse(reasonPhrase, error) {
    return {
            success: false,
            data: {},
            message: reasonPhrase,
            error: error
        }
}

module.exports = errorResponse;