const Repo = require('./repo');

const products = require('../models/products');

class ProductsRepo extends Repo{
    constructor(model){
        super(model);
        console.log(model);
    }
}

const productsRepo = new ProductsRepo(products);

module.exports = productsRepo;