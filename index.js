const store=require('./Repos/users');
const express=require('express');
const bodyParser=require('body-parser');
const cookieSession=require('cookie-session');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieSession({keys:['qqqpwoeirutylaksjdhfgzmxncbvewasscjggjcjgcmnncjhduxhgfddd']}));

app.get('/signup',(req,res)=>{
	res.send(`<div>	
<form method="POST">
	<input name="email" placeholder="user email"/>
	<input name="pwd" placeholder="passward"/>
	<input name="cpwd" placeholder="check passward"/>
	<button>Sign Up</button>
</form>	
			 </div>`);
})

app.post( '/signup' ,async( req , res )=>{
	const { email,pwd,cpwd}=req.body;
	const alreadyUser=await store.getBy({email:email});
	if(alreadyUser){
		res.send(`name reserved`);
		return;
	}
	if(pwd!==cpwd){
		res.send(`passwords must be matched`);
		return;
	}
	const user=await store.createStat({email,passward:pwd});
	
	req.session.userId=user.Id;
	res.send(`responce recorder`);
})

app.get('/signout',(req,res)=>{
	req.session=null;
	res.send(`you are signed out`)
});

app.get('/signin',(req,res)=>{
	res.send(`
		<div>	
		<form method="POST">
			<input name="email" placeholder="user email"/>
			<input name="pwd" placeholder="passward"/>
			<button>Sign In</button>
		</form>	
		</div>
	`)
})

app.post('/signin',async (req,res)=>{
	const {email,pwd}=req.body;
	const user=await store.getBy({email});
	if(!user){
		res.send('Email not found  :(');
		return;
	}else if(!await store.validate(pwd,user.passward)){
		res.send('invalid passward  :-|');
		return;
	}
	req.session.userId=user.Id;
	res.send('You are logged In :)');
	
});

app.listen(3000,()=>{
	console.log("work is started...");
})


//    /////////// / / / /// / // /  /my Body Parser ////// /// / / //  // / / //  / / // / 
//const bodyParse=(req,res,next)=>{
//	if(req.method==="POST"){
//		req.on('data',(data)=>{
//		const dataString=data.toString('utf8').split('&');
//		const formData={};
//		for(let pair of dataString){
//			const [key,value]=pair.split('=');
//			formData[key]=value;
//			} 
//			req.body=formData;
//			next();
//		});	
//	}else{
//		next();
//	}
//}
