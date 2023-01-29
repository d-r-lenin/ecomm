class Repo {
	constructor(model) {
		this.model = model;
	}

	async getAll() {
		try {
			let result =  await this.model.find({});
			if (result) {
				result = result.toObject();
			}
			return result;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	async get(id) {
		try {
			let result = await this.model.findById(id);
			if (result) {
				result = result.toObject();
			}
			return result;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	async deleteStat(id){
		try {
			const result = await this.model.findByIdAndDelete(id);
			return result;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	async update(id,object){
		try{
			const updated = await this.model.findOneAndUpdate(id, {
                $set: object,
            });
			return updated;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	async getBy(object){
		try{
			let result = await this.model.findOne(object);
			if (result) {
				result = result.toObject();
			}
			return result;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	async createStat(object){
		try{
			let result = await this.model.create(object);
			if (result) {
				result = result.toObject();
			}
			return result;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

}


module.exports = Repo;