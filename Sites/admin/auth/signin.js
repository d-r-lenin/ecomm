const layout = require('../layout');
const {getError}=require('../../viewHelper');

module.exports=({errors})=>{
	return layout({content :`
<div>	
	<form method="POST">
		<input name="email" placeholder="user email"/>
${getError(errors,'email')}
		<input name="pwd" placeholder="password"/>
${getError(errors,'pwd')}
		<button>Sign In</button>
	</form>	
</div>
`});
}