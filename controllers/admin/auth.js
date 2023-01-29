//////////////////////////////////IMPORTING REQUIRMENTS//////////////////////////////////////////
const express=require('express');

const store = require('../../Repos/users');
const signupT=require('../../Sites/admin/auth/signup');
const signinT=require('../../Sites/admin/auth/signin');


const { 
	errorHandler , 
	errorHandlerUP ,
	errorHandlerIN
		}=require('./middlewares');
const {
	isValidEmail ,
	isValidPassword ,
	isEqualToPassword,
	isEmailExist,
	isPasswordExist
			}=require('./validator');


///////////////////////////////////////////////////////////////////////////////////////////////////////
//              INIT EXPRESS SUB SERVER///////////////////////////////////////////////////////////////
const app=express();
////////////////////////////////////////////////////////////////////////////////////////////////////////
//               GET REQUEST HANDLERS
///////////////////////////////////////////////////////////////////
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
		 errorHandlerUP(signupT),
		 async( req , res )=>{
			const { email,pwd,cpwd} = req.body;
			
			const user=await store.createStat({email,password:pwd});
			req.session.userId=user.Id;
			res.redirect('/admin/products');
		}
);

app.post('/signin',
		 [isEmailExist,isPasswordExist],
		 errorHandlerIN(signinT),
		 async (req,res)=>{
			const { email }=req.body;
			const user = await store.getBy({email});
			req.session.userId = user.id;
			res.redirect('/admin/products');
		}
);
//////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////EXPORT HANDLERS///////////////////
module.exports=app;
/////////////////////////////////////////////////////////////////////////////////