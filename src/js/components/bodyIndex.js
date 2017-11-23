import React from 'react';
import ReactDOM from 'react-dom';

import ReactMixin from 'react-mixin'
import MixinLog from './mixins';
import { Input } from 'antd';
import { Button } from 'antd';

import BodyChild from './bodyChild';
export default class BodyIndex extends React.Component{
	//初始化
	constructor(){
		super(); //调用基类的所有初始化方法
		this.state = {
			username : "Parry",
			age : 20
		};	//state值作用于当前作用域

	};
	changeUserInfo(){
		this.setState({age : 22});

		/*
		//获取、操作DOM节点的第一种方式
		var mySubmitButton = document.getElementById("submitButton");
		ReactDOM.findDOMNode(mySubmitButton).style.color = 'red';
		*/

		//获取、操作DOM节点的第二种方式
		//console.log(this.refs.submitButton);
		this.refs.submitButton.style.color = 'red';

		MixinLog.log();

	}
	changeChildValueChange(event){
		this.setState({age : event.target.value});
	};
	render(){
		/*
		//箭头函数 也称作 匿名函数
		setTimeout(()=>{
			//更改state的时候
			this.setState({username: "syymo"});
		},4000);
		*/
		return (
			<div>
				<h2>这里是主题部分。</h2>
				<p>{this.state.username}:{this.state.age}</p>
				<Input placeholder="Basic usage" />
				<Button type="primary">Primary</Button>
				<input id="submitButton" ref="submitButton" type="button" value="提交" onClick={this.changeUserInfo.bind(this)}/>
				<BodyChild {...this.props} id={4} handleChildValueChange = {this.changeChildValueChange.bind(this)}/>
			</div>
		)
	}
}

ReactMixin(BodyIndex.prototype, MixinLog);
