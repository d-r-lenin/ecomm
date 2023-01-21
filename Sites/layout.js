module.exports=({content})=>{
	return `
<!Doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>BeEShoping</title>
	</head>
 <body>
	  <header>
			<h1>BeEShpoing</h1>
			<a href="/">home</a>
			<a href="/admin/products">Admin</a>
			 <a href="/cart">Cart</a>
		</header><br/>
     		${content}
 </body>
</html>
`	
}