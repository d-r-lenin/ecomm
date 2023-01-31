const layout =require('../layout');

module.exports=({ products })=>{

	products=products.map((item)=>{
		return `
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4" style="
    /* width: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;
">
      <img src="data:image/png;base64,${item.image}" class="img-fluid rounded-start" alt="${item.title} image" style="max-height: 10rem;object-fit: contain; display:block; margin:auto;">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text"> ₹ ${item.price}</p>
		<div class="row">
			<form method="POST" action="/admin/products/${item.id}/delete" class="col" >
			<input type="submit" class="card-btn btn btn-danger" value="Delete"/>
			</form>
			<div class="col">
				<a href="/admin/products/${item.id}/edit" class="btn btn-info" > 
			Edit </a>
			</div>
		</div>
		
      </div>
    </div>
  </div>
</div>
`;
	}).join('');
	
	return layout({
		content:`
<div style="
margin: auto;
width: fit-content;
">
	<div style="padding: 1rem 2rem;">
		<h2 class="display-5" style="display:inline;padding:1rem;" >Products</h2>
		<a href="/admin/products/new" type="button" class="btn btn-success ">Add new</a>
	</div>
</div>
<div style="
margin: auto;
width: fit-content;
">${products}</div>
`,
		links:`

`,
		scripts:`
		
`
	});
}