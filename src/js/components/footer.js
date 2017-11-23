import React from 'react';
//引用css文件
var footerCss = require("../../css/footer.css");
export default class ComponentFooter extends React.Component{
	render(){
		//console.log(footerCss)
		return (
			<footer className={footerCss.miniFooter}>
				<h1>这里是页脚，放一些版权信息。</h1>
			</footer>
		)
	}
}