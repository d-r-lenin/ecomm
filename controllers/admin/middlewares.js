const {validationResult}=require('express-validator');

const productsRepo=require('../../Repos/products');

module.exports={
//////////////////////////////////////
	secureAuth(req,res,next){
		if(!req.session.userId){
			return res.redirect('/signin');
		}
		next()
	},
//////////////////////////////////////
	errorHandlerEDIT(template){
		return async(req,res,next)=>{
			const errors=validationResult(req);
			if(!errors.isEmpty()){
				const product=await productsRepo.get(req.params.id);
				return res.send(template({product,errors}));	
			}
			next();
		}
	},
//////////////////////////////////////
	errorHandler(template){
			return (req,res,next)=>{
			const errors=validationResult(req);
			if(!errors.isEmpty()){
					return res.send(template({errors}));
			}
			next();
		}
	},
////////////////////////////////////////
	errorHandlerUP(template){
			return (req,res,next)=>{
				const errors=validationResult(req);
				const { email,pwd,cpwd}=req.body;
				if(errors.errors.length>1){
					return res.send(template({errors,exGirl:{email,pwd,cpwd},req}));
				}else if(errors.mapped()['cpwd'].msg!=='Invalid value'){
					return res.send(template({errors,exGirl:{email,pwd,cpwd},req}));
				}
				next();
			}
	},
/////////////////////////////////////
	errorHandlerIN(template){
		return (req,res,next)=>{
			const errors=validationResult(req);	
			if(!errors.isEmpty()){
				return res.send(template({errors,exGirl:req.body}));
			}
			next();
		}
	}
/////////////////////////////////////
}