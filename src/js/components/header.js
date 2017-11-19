import React from 'react';
import ReactDOM from 'react-dom';

//export default导出ComponentHeader类
export default class ComponentHeader extends React.Component{
	/*
	componentWillMount(){
		//定义你的逻辑即可
		console.log("ComponentHeader - commponentWillMonut");
	}
	componentDidMount(){
		console.log("ComponentHeader - commponentWillMonut");
	}
	*/
	render(){
		var userName = 'Parry';
		var html = '<label>Imooc&nbsp;Syymo</label>'
		return (
			<header>
				{/*userName == '' ? '用户未登录' : '用户名：' + userName*/}
				{/*<p>{html}</p>*/}
				{/*<p dangerouslySetInnerHTML = {{__html:html}}></p>*/}
				<ul>
					<li>首页</li>
					<li>门票</li>
					<li>设备</li>
					<li>纪念品</li>
				</ul>
			</header>
		)
	}
}
