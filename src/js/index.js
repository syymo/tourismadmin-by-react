var React = require('react');	//引用react
var ReactDOM = require('react-dom');

//导入其他的js
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyIndex';
import BasicLayout from './components/BasicLayout';


import 'antd/dist/antd.css';
export default class Index extends React.Component{
	render(){
		/*
		var component = <ComponentHeader userId = {123}/>
		if(用户已登录){
			component = <ComponentLoginedHeader/>
		}else{
			component = <ComponentHeader/>
		}
		*/
		return (
			<div>
				{/*component*/}
				{/*<ComponentHeader/>*/}
				{/*<BodyIndex name={"syymo"}/>*/}
				{/*<ComponentFooter/>*/}
				<BasicLayout/>
			</div>
		)
	}
}
//入口定义
ReactDOM.render(
	<Index/>,document.getElementById('root')
);
