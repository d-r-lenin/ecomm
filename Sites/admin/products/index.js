const layout =require('../layout');

module.exports=({ products })=>{

	products=products.map((item)=>{
		return `<div>
	<span>${item.title}</span>
	<span>${item.price}</span>
	<a href="/admin/products/${item.id}/edit"><button>Edit</button></a>
	<form method="POST" action="/admin/products/${item.id}/delete">
		<button>Delete</button>
	</form>
</div>
`;
	}).join('');
	
	return layout({
		content:`
<div>
	<h1>PRODUCTS</h1>
	<a href="/admin/products/new"><button>Add new</button></a>
</div>
<div>${products}</div>
`,
		links:`
<link href="../../css/style.css" rel="stylesheet"/>
`
	});
}