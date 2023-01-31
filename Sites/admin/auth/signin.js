const layout = require('../layout');
const {checkForExGirl,getError}=require('../../viewHelper');

module.exports=({errors,exGirl})=>{
	const {mail,pwd}=checkForExGirl(exGirl);
	return layout({content :`
		<div class="container container-sm mt-5" style="max-width:500px;">
            <form method="POST">
                <h2 class="display-5">Sign In</h2>
                <div class="form-group">
                    <label>Email </label>
                    <input name="email" value="${mail || "test@richardlenin.com"}" placeholder="user email"  class="form-control" required>
					<p class="validation">${getError(errors,'email')}</p>
                </div>
                <div class="form-group">
                    <label > Password</label>
                    <input type="password" name="pwd" value="${pwd || "test@richardlenin." }" placeholder="password" type="text" class="form-control" required>
					<p class="validation">${getError(errors,'pwd')}</p>
                </div>
                <input type="submit" class="btn" value="sign in">
            </form>
            Don't have an account?
            <a href="/signup">Sign Up</a>
    </div>
`,links:`
<link href="css/style.css" rel="stylesheet" />
`});
}