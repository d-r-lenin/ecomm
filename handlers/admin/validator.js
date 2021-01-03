const { check }=require('express-validator');
const store=require('../../Repos/users');

module.exports={
	isValidTitle:
		check('title')
			.trim()
			.isLength({min:5,max:50})
			.withMessage('Title must have 5 to 50 charecter length'),
	isValidPrice:
		check('price')
			.trim()
			.toFloat()
			.isFloat({min:1})
			.withMessage('Provide a Valid Value in Rupee'),
	isValidEmail:
		check('email')
			.trim()
			.normalizeEmail()
			.isEmail()
			.withMessage('Email is not valid')
			.custom(async (email)=>{
				const alreadyUser=await store.getBy({email});
				if(alreadyUser){
				throw new Error('Email is already taken by Mr.Lee');	
				}		 	 
		  	}),
	isValidPassword:
		check('pwd')
			.trim()
			.isLength({min:6,max:20})
			.withMessage('length of password must <20 and >6'),
	isEqualToPassword:
       check('cpwd')
			.trim()
			.isLength({min:6,max:20})
			.withMessage('password must <20 and >6')
            .custom((cpwd, { req }) => {
				if (cpwd !== req.body.pwd) {
				  throw new Error('Passwords must match');
        		}
			}),
	isEmailExist:	
		check('email')
			.trim()
			.isEmail()
			.withMessage('Sorry Invalid Email :(')
			.custom(async (email)=>{
				const user=await store.getBy({email});
				if(!user){
					throw new Error('Email not found  :(');
				}
			}),
	isPasswordExist:
		check('pwd')
			.trim()
			.custom(async (pwd,{req})=>{
				const {email}=req.body;
				const user=await store.getBy({ email });
				if(!user){
					throw new Error('invalid password')
				}
				if(!await store.validate(pwd,user.password)){
					throw new Error('Wrong password  :-|');
				}
			})

	//		check('cpwd')
//			.custom((cpwd,{req})=>{
//				if(cpwd!==req.body.pwd){
//					throw new Error('passwords must be matched');
//				}
//			})
}
