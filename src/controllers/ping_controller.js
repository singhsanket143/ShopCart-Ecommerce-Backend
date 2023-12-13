function pingController(request, response) {
    console.log("Controller hit");
    return response.json({message: 'OK from V1 API'});
}

function pingControllerV2(request, response) {
    return response.json({message: 'OK from V2 API'});
}



module.exports = {
    pingController,
    pingControllerV2
}