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
			 <a href="/admin/products"><span>ë</span> prodects</a>
		</header><br/>
     		${content}
 </body>
</html>
`	
}