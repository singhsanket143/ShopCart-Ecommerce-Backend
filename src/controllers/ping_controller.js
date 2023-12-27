function pingCheck(request, response) {
    console.log("Controller hit");
    return response.json({message: 'OK from V1 API'});
}

function pingAuthCheck(request, response) {
    return response.json({message: 'OK'});
}

function pingCheckV2(request, response) {
    return response.json({message: 'OK from V2 API'});
}



module.exports = {
    pingCheck,
    pingCheckV2,
    pingAuthCheck
}