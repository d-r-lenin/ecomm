const layout=require('./layout');
const productsRepo=require('../Repos/products');

module.exports=async ({products})=>{
	
	let total=0;
	items=products.map(product=>{
		total=total+(product.count*product.price);
		return `
			<li>${product.title} -${product.count} -price::$${product.price} total::$${product.count*product.price} -
			<form method="POST" action="/cart/delete">
				<input name="productId" value="${product.id}" hidden>
				<button>Remove</button>
			</form> </li>
		`;
	}).join('');
	
	return layout({content:`
		${items}  total=${total}
	`});

}