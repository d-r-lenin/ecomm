module.exports=({content})=>{
	return `
<!Doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Admin pannel</title>
		<link href="css/style.css" rel="stylesheet" />
	</head>
 <body>
     		${content}
 </body>
</html>
`	
}