const layout = require('../layout');
const {checkForExGirl,getError}=require('../../viewHelper');

module.exports=({errors,exGirl,req})=>{	
	const {mail,pwd,cpwd}=checkForExGirl(exGirl);
	return layout({content:`
<div>
<form method="POST">
<p>UserIdIs:${req.session.userId}</p>
	<input name="email" placeholder="user email" value="${mail}"/>
${getError(errors,'email')}<br/>
	<input name="pwd" value="${pwd}" placeholder="password"/>
${getError(errors,'pwd')}<br/>
	<input name="cpwd" value="${cpwd}" placeholder="check password"/>
${getError(errors,'cpwd')}<br/>
	<button>Sign Up</button>
</form>	
</div>
`});
}