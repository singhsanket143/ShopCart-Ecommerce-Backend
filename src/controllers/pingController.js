function pingController(request, response) {
    return response.json({message: 'ok'});
}

module.exports = {
    pingController
}