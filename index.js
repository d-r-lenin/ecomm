const express=require('express');
const bodyParser=require('body-parser');
const cookieSession=require('cookie-session');

const routerU=require('./handlers/admin/auth');
const routerAP=require('./handlers/admin/products');
const routerP=require('./handlers/products');
const routerC=require('./handlers/carts');

const app=express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
///Don'tTouchTheCookieSession👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇//
app.use(cookieSession({keys:['qqqpwoeirutylaksjdhfgzmxncbvewasscjggjcjgcmnncjhduxhgfddd']}));
app.use(routerU);
app.use(routerP);
app.use(routerAP);
app.use(routerC);

app.listen(process.env.PORT||3000,()=>{
	console.log("Server Is Running...");
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
