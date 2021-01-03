const express=require('express');
const multer=require('multer');

///////////////////////

const ProductsRepo=require('../../Repos/products');
const newProductT=require('../../Sites/admin/products/new');
const indexProductT=require('../../Sites/admin/products/index');
const editProductT=require('../../Sites/admin/products/edit');

const {
	errorHandler,
	errorHandlerEDIT,
	secureAuth
		}=require('./middlewares');
const {
	isValidTitle,
	isValidPrice,
		}=require('./validator');

//////////////////////
const app=express();
const upload=multer({storage:multer.memoryStorage()});
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

app.get('/admin/products',secureAuth,async(req,res)=>{
	const products=await ProductsRepo.getAll();
	res.send(indexProductT({products}));
});

app.get('/admin/products/new',secureAuth,(req,res)=>{
	res.send(newProductT({}));
});

app.get('/admin/products/:id/edit',secureAuth,async(req,res)=>{
	const product=await ProductsRepo.get(req.params.id);
	res.send(editProductT({product}));
})
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
app.post(
	'/admin/products/new',
	secureAuth,
	upload.single('image'),
	[isValidTitle,isValidPrice],
	errorHandler(newProductT),
	async (req,res)=>{
		const {title,price}=req.body;
		const p=await ProductsRepo.createStat({title,price,image:req.file.buffer.toString('base64')})
		res.redirect('/admin/products');
})

app.post(
	'/admin/products/:id/edit',
	secureAuth,
	upload.single('image'),
	[isValidTitle,isValidPrice],
	errorHandlerEDIT(editProductT),
	async(req,res)=>{
		const changes=req.body;
		if(req.file){
			changes.image=req.file.buffer.toString('base64');
		}else{
			changes.image=(await ProductsRepo.get(req.params.id)).image;
		}
		await ProductsRepo.update(req.params.id,changes);
		res.redirect('/admin/products');
})

app.post('/admin/products/:id/delete',
		 secureAuth,
		 async(req,res)=>{
			await ProductsRepo.deleteStat(req.params.id);
			res.redirect('/admin/products');	
})
//////////////////////////////
//////////////////////////////

module.exports=app;
