//////////////////////////////////IMPORTING REQUIRMENTS//////////////////////////////////////////
const express=require('express');
const { check ,validationResult }=require('express-validator');
const store=require('../../Repos/users');
const signupT=require('../../Sites/admin/auth/signup');
const signinT=require('../../Sites/admin/auth/signin');
const {
	isValidEmail ,
	isValidPassword ,
	isEqualToPassword,
	isEmailExist,
	isPasswordExist
			}=require('./validator');
///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////INIT EXPRESS SUB SERVER///////////////////////////////////////////////////////////////
const app=express();
////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////GET REQUEST HANDLERS///////////////////////////////////////////////////////////////////
app.get('/signup',(req,res)=>{
	res.send(signupT({req}));
});

app.get('/signout',(req,res)=>{
	req.session=null;
	res.send(`you are signed out`)
});

app.get('/signin',(req,res)=>{
	res.send(signinT({}));
});
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////POST REQUEST HANDLERS///////////////////////////////////////////////////////
app.post( '/signup', 
		 [isValidEmail,isValidPassword,isEqualToPassword],
		 async( req , res )=>{
			const errors=validationResult(req);
			const { email,pwd,cpwd}=req.body;
			if(errors.errors.length>1){
				return res.send(signupT({errors,exGirl:{email,pwd,cpwd},req}));
			}else if(errors.mapped()['cpwd'].msg!=='Invalid value'){
				return res.send(signupT({errors,exGirl:{email,pwd,cpwd},req}));
			}
			const user=await store.createStat({email,password:pwd});
			req.session.userId=user.Id;
			res.send(`responce recorder`);
		}
);

app.post('/signin',
		 [isEmailExist,isPasswordExist],
		 async (req,res)=>{
			const {email}=req.body;
			const errors=validationResult(req);	
			if(errors.isEmpty()){
			const user=await store.getBy({email});
				req.session.userId=user.Id;
				return res.send('You are logged In :)');
			}	
			res.send(signinT({errors,exGirl:req.body}));
			
		}
);
//////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////EXPORT HANDLERS///////////////////
module.exports=app;
/////////////////////////////////////////////////////////////////////////////////