
const header = `
<header >
			
			<nav class="navbar navbar-expand-lg justify-content-between  align-items-center navbar-light bg-light">
			<a class="navbar-brand" href="#">Admin Pannal</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
			  <span class="navbar-toggler-icon"></span>
			</button>
		
			<div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
				<li class="nav-item active">
					<a class="nav-link" href="/">Home</a>
				</li>
				<li class="nav-item active">
					<a class="nav-link " href="/admin/products">
					Products
					</a>
				</li>
				<li class="nav-item active">
					<a class="nav-link" href="/signout">Sign Out</a>
				</li>
				</ul>
			</div>
			</nav>
	  </header>
`

module.exports=({content,links, scripts})=>{
	return `
<!Doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Admin pannel</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
		${links}
	</head>
 <body>
 <div class="container align-center">
		${header}
		${content}
	</div>
		${scripts || ''}
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
 </body>
</html>
`	
}