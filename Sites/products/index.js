const layout=require('../layout');

module.exports=({products})=>{
	products=products.map((item)=>{
		return `
			<li>${item.title}-->>$${item.price}</li>
			<img src="data:image/png;base64,${item.image}">
			<form method="POST" action="/cart/add">
			<input name="productId" hidden value="${item.id}"/>
			<button>Add To Cart</button>
			</form>`;
	}).join('');
	
	
	return layout({content:`
		<h1>Editers Choice</h1>	
		<div>${products}</div>
	`});
	
	
}