module.exports=({content,links})=>{
	return `
<!Doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Admin pannel</title>
		${links}
	</head>
 <body>
	  <header>
			<h1>Admin Pannal</h1>
			<nav>
			<a href="/">Home<a>
			<a href="/admin/products"><span>ë</span> prodects</a>
			</nav>
	  </header><br/>
     		${content}
 </body>
</html>
`	
}