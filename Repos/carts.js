const Repo=require('./repo');

class CartsRepo extends Repo{
	
	async addToCart(cartId,productId){
			const cart= await super.get(cartId);
				if(!cart){
					return 1;
				}
			let items=cart.items;
			if(items.length!==0){
				let itemFound={};
				items=items.filter(item=>{
					if(item.id!==productId){
						return true;
					}else{
						itemFound.id=item.id;
						itemFound.count=item.count+1;
					}
				});

				if(Object.keys(itemFound).length===0){	
					items.push({id:productId,count:1});
				}else{
					items.push(itemFound);
				}

			}else{
				items.push({id:productId,count:1});
			}

			await super.update(cart.id,{ items });
			return 0;
	}
	
	async deleteFromCart(cartId,productId){
			const cart= await super.get(cartId);
				if(!cart){
					return 1;
				}
			if(cart.items.length===0){
				return 2;
			}
			let found={};
			const items=cart.items.filter(item=>{
					if(item.id!==productId){
						return true;
					}else if(item.count>1){
						found.id=item.id;
						found.count= --item.count;
					}
			});
		
			if(Object.keys(found).length!==0){
				items.push(found);
			}
		
			if(items.length===0){
				return 2;
			}
			
			await super.update(cart.id,{items});
			return 0;
	}
	
}

module.exports=new CartsRepo('carts.json');