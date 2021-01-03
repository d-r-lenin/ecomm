const fs = require('fs');
const crypto=require('crypto');
const util=require('util');
const Repo=require('./repo');
const scrypt=util.promisify(crypto.scrypt);

class UserRepo extends Repo{
	async createStat(object){
		const users= await this.getAll();
		object.id=this.randomId();
		const salt=crypto.randomBytes(8).toString('hex');
		const buff=await scrypt(object.password,salt,64);
		const record={
			...object,
			password:`${buff.toString('hex')}.${salt}`
		}
		users.push(record);
		this.write(users);
		return record;
	}
	async validate(given,saved){
		const [hash,salt]=saved.split('.');
		const givenHash= await scrypt(given,salt,64);
		return hash===givenHash.toString('hex');
	}

}
module.exports=new UserRepo('users.json');