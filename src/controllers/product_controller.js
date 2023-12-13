function createProduct(req, res) {

    try {
        
        // some db processing
    
        return res.json({
            sucess: true,
            error: {},
            message: 'Successfully created a product',
            data: {
                id: Math.random() * (20),
                title: req.body.title,
                description: req.body.description,
                category: req.body.category,
                price: req.body.price,
                image: req.body.image
            }
        });

    } catch(error) {
        console.log("Something went wrong", error);
    }

}

module.exports = {
    createProduct
}