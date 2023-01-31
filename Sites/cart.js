const layout=require('./layout');
const productsRepo=require('../Repos/products');

module.exports=async ({products})=>{
	
	let total=0;
	items=products.map(product=>{
		total=total+(product.count*product.price);
		return `
		<div class="col-4">
			<div class="card" style="width: 18rem;">
				<img style="max-height: 10rem;object-fit: contain;" src="data:image/png;base64,${product.image}" class="card-img-top" alt="${product.title} image">
				<div class="card-body">
					<h5 class="card-title">${product.title}</h5>
					<p class="card-text">
						<span class="price">₹${product.price}</span> 
						<span class="count">Quantity :${product.count}</span>
					</p>
					<form method="POST" class="card-test" action="/cart/delete">
						<input name="productId" value="${product.id}" hidden>
						<input type="submit" class="btn btn-danger btn-submit" value="Remove" >
					</form>
				</div>
			</div>
		</div>
		`;
	}).join('');
	
	return layout({content:`
	<div class="row">
		<div class="col-4">
			<h3>Total Price : ₹${total}</h3>
		</div>
	</div>
		<div class="row">
			${items}
		</div>		
	`});

}