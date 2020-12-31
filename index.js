const express=require('express');
const bodyParser=require('body-parser');
const cookieSession=require('cookie-session');
const rout=require('./handlers/admin/auth');

const app=express();

app.use(bodyParser.urlencoded({extended:true}));
///Don'tTouchTheCookieSession👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇//
app.use(cookieSession({keys:['qqqpwoeirutylaksjdhfgzmxncbvewasscjggjcjgcmnncjhduxhgfddd']}));
app.use(rout);

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
