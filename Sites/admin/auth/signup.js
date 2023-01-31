const layout = require('../layout');
const {checkForExGirl,getError}=require('../../viewHelper');

module.exports=({errors,exGirl,req})=>{	
	const {mail,pwd,cpwd}=checkForExGirl(exGirl);
	return layout({
        content: `
		<div class="container container-sm" style="max-width:500px;">
            <form method="POST" class="mt-5">
                <h2 class="display-5">Sign Up</h2>
                <div class="form-group">
                    <label>Email </label>
                    <input name="email" value="${mail}" placeholder="user email"  class="form-control" required focus>
					<p class="validation">${getError(errors, "email")}</p>
                </div>
                <div class="form-group">
                    <label > Password</label>
                    <input type="password" name="pwd" value="${pwd}" placeholder="password" type="text" class="form-control" required>
					<p class="validation">${getError(errors, "pwd")}</p>
                </div>
				<div class="form-group">
                    <label >confirm Your Password</label>
                    <input type="password" name="cpwd" value="${cpwd}" placeholder="password" type="text" class="form-control" required>
					<p class="validation">${getError(errors, "cpwd")}</p>
                </div>
                <input type="submit" class="btn" value="sign up">
            </form>
            Already have an account? 
            <a href="/signin">Sign In</a>
    </div>
`,
        links: `
<link href="css/style.css" rel="stylesheet" />
`,
    });
}





//<div>
//<form method="POST">
//<p>UserIdIs:${req.session.userId}</p>
//	<input name="email" placeholder="user email" value="${mail}"/>
//${getError(errors,'email')}<br/>
//	<input name="pwd" value="${pwd}" placeholder="password"/>
//${getError(errors,'pwd')}<br/>
//	<input name="cpwd" value="${cpwd}" placeholder="check password"/>
//${getError(errors,'cpwd')}<br/>
//	<button>Sign Up</button>
//</form>	
//</div>