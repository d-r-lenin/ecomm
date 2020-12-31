module.exports={
	getError(errors,property){
	try{
		return errors.mapped()[property].msg
	} catch(err){
		return '';
	}
	
},
	checkForExGirl(exGirl={}){	
		let mail="";let pwd="";let cpwd="";
	if(exGirl.email){
		mail=exGirl.email;
	}
	if(exGirl.pwd){
		pwd=exGirl.pwd;
	}
	if(exGirl.cpwd){
		cpwd=exGirl.cpwd;
	}
	return {
		mail,pwd,cpwd
	}
}

}