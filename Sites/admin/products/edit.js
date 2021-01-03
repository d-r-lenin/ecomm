const layout=require('../layout');
const {getError}=require('../../viewHelper');

module.exports=({product,errors})=>{
	return layout({
		content:`
<div class="container">
            <form method="POST" enctype="multipart/form-data">
                <h1>Edit Product</h1>
                <div class="form-group">
                    <label>Title </label>
                    <input name="title" value="${product.title}" placeholder="Title"  class="form-control">
					<p class="validation">${getError(errors,'title')}</p>
                </div>
                <div class="form-group">
                    <label >Price</label> 
                    <input name="price" value="${product.price}" placeholder="Price" class="form-control">
					<p class="validation">${getError(errors,'price')}</p>
                </div>
				<div class="form-group">
                    <label >Image</label>
                    <input name="image" type="file" class="form-control">
                </div>
                <input name="image" type="submit" class="btn" value="Add Product">
            </form>
    </div>
`,	
		links:`<link href="../../../css/style.css" rel="stylesheet"/>`
	})
}