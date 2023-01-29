const Repo = require('./repo');
const User = require('../models/users');
const crypto = require('crypto');
const util = require('util');
const scrypt = util.promisify(crypto.scrypt);

class UserRepo extends Repo{
	constructor(model){
		super(model);
	}

	async createStat(object){
		try{

			const salt = crypto.randomBytes(8).toString('hex');
			const buffer = await scrypt(object.password,salt,64);
			const hashed = buffer.toString('hex');
			object.password = `${hashed}.${salt}`;

			const user = new User(object);
			await user.save();
			return user;
		} catch (error) {
			console.error(error);
			return null;
		}
	}
	async validate(given,saved){
		const [hash,salt] = saved.split('.');
		const givenHash = await scrypt(given,salt,64);
		return hash === givenHash.toString('hex');
	}

}

const userRepo = new UserRepo(User);

module.exports = userRepo;