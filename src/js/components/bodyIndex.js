import React from 'react';

export default class BodyIndex extends React.Component{
	//初始化
	constructor(){
		super(); //调用基类的所有初始化方法
		this.state = {username: "Parry"};	//state值作用月当前作用域

	}
	render(){
		//箭头函数 也称作 匿名函数
		setTimeout(()=>{
			//更改state的时候
			self.setState({username: "syymo"});
		},4000);
		return (
			<div>
				<h2>这里是页脚，放一些版权信息。</h2>
				<p>{this.state.username}</p>
			</div>
		)
	}
}


/*setTimeout(function(){
	//更改state的时候
	this.setState({username: "syymo"});
},4000);*/