const fs = require('fs');
const crypto=require('crypto');
const util=require('util');
const scrypt=util.promisify(crypto.scrypt);
class UserRepo{
	constructor(filename){
		if(!filename){
			throw new Error('requer file name');
		}
		this.filename=filename;
		try{
			fs.accessSync(filename)
		}catch{
			fs.writeFileSync(filename,'[]');
		}
		
	}

	async getAll(){
		return  JSON.parse(await fs.promises.readFile(this.filename,{encoding:'utf8'}));
	}
	
	async createStat(object){
		const users= await this.getAll();
		object.Id=this.randomId();
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
	async write(file){
		await fs.promises.writeFile(this.filename,JSON.stringify(file,null,3));
	}
	randomId(){
		return crypto.randomBytes(4).toString('hex');
	}
	async validate(given,saved){
		const [hash,salt]=saved.split('.');
		const givenHash= await scrypt(given,salt,64);
		return hash===givenHash.toString('hex');
	}
	async get(id){
		const users=await this.getAll();
		return await users.find(user=>user.Id===id);
	} 
	async deleteStat(id){
		const users=await this.getAll();
		const filtered=users.filter(user=>user.Id!==id);
		this.write(filtered);
	}

	async update(id,object){
		const users=await this.getAll();
		const target =users.find(user=>user.Id===id);
		if(!target){
			throw new Error(`Given Id ${id} not found`);
		}
		Object.assign(target,object);
		this.write(users);
	}

	async getBy(object){
		const users= await this.getAll();
		for(let user of users){
			let found=true;
			for(let key in object){
				if(user[key]!==object[key]){
					found=false;
				}
			}
			if(found){
			return user;	
			}
			
		}
	}
}
module.exports=new UserRepo('users.json');