module.exports=({content})=>{
	return `
<!Doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>ECOMM</title>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
		
	</head>
 <body>
 <div class="container">
	  <header>
	
		<nav class="navbar navbar-expand-lg align-center navbar-light bg-light">
	<a class="navbar-brand" href="#">BeEShpoing</a>
	<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

	<div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
		<ul class="navbar-nav mr-auto">
		<li class="nav-item active">
			<a class="nav-link" href="/">Home</a>
		</li>
		<li class="nav-item active">
			<a class="nav-link" href="/admin/products">Admin</a>
		</li>
		<li class="nav-item active">
			<a class="nav-link " href="/cart" id="navbarDropdown"  aria-haspopup="true" aria-expanded="false">
			cart
			</a>
		</li>
		</ul>
	</div>
	</nav>
	
		</header><br/>
		${content}
		</div>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
 </body>
</html>
`	
}