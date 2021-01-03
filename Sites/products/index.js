const layout=require('../layout');

module.exports=({products})=>{
	products=products.map((item)=>{
		return `
			<li>${item.title}-->>$${item.price}</li>
			<img src="data:image/png;base64,${item.image}">
			<button>Add To Cart</button>`;
	}).join('');
	
	
	return layout({content:`
		<h1>Editers Choice</h1>	
		<div>${products}</div>
	`});
	
	
}