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
			 <a href="/admin/products"><span>ë</span>Prodects</a>
			 <a href="#">Cart</a>
		</header><br/>
     		${content}
 </body>
</html>
`	
}