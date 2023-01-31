const layout=require('../layout');
const {getError}=require('../../viewHelper');

module.exports=({errors})=>{
	return layout({
		content:`
<div class="container container-sm" style="max-width:500px;">
            <form method="POST" enctype="multipart/form-data">
                <h1>Add Product</h1>
                <div class="form-group">
                    <label>Title </label>
                    <input name="title" placeholder="Title"  class="form-control" required >
					<p class="validation">${getError(errors,'title')}</p>
                </div>
                <div class="form-group">
                    <label >Price</label> 
                    <input name="price" placeholder="Price" class="form-control" required>
					<p class="validation">${getError(errors,'price')}</p>
                </div>
				<div class="form-group">
                    <label >Image</label>
                    <input name="image" type="file" class="form-control" required>
                </div>
                <input name="image" type="submit" class="btn btn-primary" value="Add Product">
            </form>
    </div>
`,
	links:`<link href="../../../css/style.css" rel="stylesheet"/>`
	})
}


//<form method="POST" enctype="multipart/form-data">
//<input name="title" placeholder="Title"/>
//${getError(errors,'title')}
//<input name="price" placeholder="Price"/>
//${getError(errors,'price')}
//<input type="file" name="image"/>
//<button>Submit</button>
//</form>