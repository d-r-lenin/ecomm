// take all the contents from products.json and put it into the database
const products = require('./products.json');

const store = require('./Repos/products');

require('dotenv').config();
require('./config/db').connect();

// node-cron 
const cron = require('node-cron');

const seed = async () => {
    // get all the products
    const existingData = await store.getAll();
    for (let product of products) {
        // check if the product already exists
        const existingProduct = existingData.find(p => p.title === product.title);
        if (existingProduct) {
            console.log('product already exists', product.title);
            continue;
        }
        let data = {
            title: product.title,
            price: product.price,
            image: product.image
        }
        await store.createStat(data);
        console.log('created product', product.title);
    }
};


// run the seed function every 1 hour
cron.schedule('0 */1 * * *', () => {
    console.log('running a task every hour');
    seed();
});


module.exports = { seed };