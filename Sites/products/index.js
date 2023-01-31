const layout=require('../layout');

module.exports=({products})=>{
	products=products.map((item)=>{
		return `
		<li class="col " >

			<div class="card" style="width: 18rem;">
				<img class=" card-img-top" src="data:image/png;base64,${item.image}" style="max-height: 10rem;object-fit: contain;">
				<div class="card-body">
					<h5 class="card-title" style="height:3rem;">${item.title}</h5>
					<p class="card-text display-2 p-1" style="font-size: 2.5rem;">₹ ${item.price}</p>
					<form method="POST" class="card-description" action="/cart/add">
						<input name="productId" hidden value="${item.id}"/>
						<button class="btn btn-submit">Add To Cart</button>
					</form>
					
				</div>
			</div>
		</li>
`;
	}).join('');
	
	
	return layout({content:`
		<h2 class="display-5" >Editers Choice</h2>	
		<ul class="row list-unstyled " style="gap:2rem;">${products}</ul>
	`});
	
	
}