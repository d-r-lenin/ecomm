'use strict';

require('dotenv').config();
require('./config/db').connect();
require('./migrate').seed();

const PORT = process.env.PORT || 3000;

const express=require('express');
const cookieSession=require('cookie-session');
const cors = require("cors");


const routerAdminAuth=require('./controllers/admin/auth');
const routerAdminProducts=require('./controllers/admin/products');
const routerProducts=require('./controllers/products');
const routerCarts=require('./controllers/carts');

const app = express();

app.use(cors( { origin: '*', credentials: true } ));
app.use(express.static('public'));
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.use(cookieSession({keys:['qqqpwoeirutylaksjdhfgzmxncbvewasscjggjcjgcmnncjhduxhgfddd']}));

app.use(routerAdminAuth);
app.use(routerProducts);
app.use(routerAdminProducts);
app.use(routerCarts);

app.listen(PORT,()=>{
	console.log(`app running on port ${PORT}`);
})
