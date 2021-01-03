const express=require('express');

const indexTemplate=require('../Sites/products/index');
const productsRepo=require('../Repos/products');

const app=express();

app.get('/',async (req,res)=>{
		const products=await productsRepo.getAll();
		res.send(indexTemplate({products}));
})

module.exports=app;