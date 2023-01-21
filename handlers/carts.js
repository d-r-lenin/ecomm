const express=require('express');

const CartsRepo=require('../Repos/carts');
const ProductsRepo=require('../Repos/products');
const cartT=require('../Sites/cart');

const app=express();

app.post('/cart/delete',async (req,res)=>{
	if(!req.session.cartId){
		res.redirect('/');
	}
	const result= await CartsRepo.deleteFromCart(req.session.cartId,req.body.productId);
	console.log(result)
	if(result===2){
		await CartsRepo.deleteStat(req.session.cartId);
		req.session.cartId=null;
	}
	res.redirect('/cart');
});

app.post('/cart/add',async(req,res)=>{
	const {productId}=req.body;
	let cart;
	if(!req.session.cartId){
		cart=await CartsRepo.createStat({ items:[]});		
		req.session.cartId=cart.id;
	}else{
		cart=await CartsRepo.get(req.session.cartId);
	}
	
	await CartsRepo.addToCart(cart.id,productId)
	
	res.redirect('/cart');
});

app.get('/cart',async(req,res)=>{
	if(!req.session.cartId){
		return res.redirect('/');
	}
	const cart=await CartsRepo.get(req.session.cartId);	
	if(!cart){
		return res.redirect('/');
	}
	let items=cart.items.map(async(item)=>{
		const n=await ProductsRepo.get(item.id);
		n.count=item.count;
		return n; 
	})
	items=await Promise.all(items);
	res.send(await cartT({products:items}));
});




module.exports=app;
