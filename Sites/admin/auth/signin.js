const layout = require('../layout');
const {checkForExGirl,getError}=require('../../viewHelper');

module.exports=({errors,exGirl})=>{
	const {mail,pwd}=checkForExGirl(exGirl);
	return layout({content :`
		<div class="container">
            <form method="POST">
                <h1>Sign In</h1>
                <div class="form-group">
                    <label>Email </label>
                    <input name="email" value="${mail}" placeholder="user email"  class="form-control" required>
					<p class="validation">${getError(errors,'email')}</p>
                </div>
                <div class="form-group">
                    <label > Password</label>
                    <input type="password" name="pwd" value="${pwd}" placeholder="password" type="text" class="form-control" required>
					<p class="validation">${getError(errors,'pwd')}</p>
                </div>
                <input type="submit" class="btn" value="sign in">
            </form>
    </div>
`,links:`
<link href="css/style.css" rel="stylesheet" />
`});
}