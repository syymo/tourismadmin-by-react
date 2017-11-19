var React = require('react');	//引用react
var ReactDOM = require('react-dom');

//导入其他的js
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyIndex';

class Index extends React.Component{
	render(){
		var component = <ComponentHeader/>
		/*
		if(用户已登录){
			component = <ComponentLoginedHeader/>
		}else{
			component = <ComponentHeader/>
		}
		*/
		return (
			<div>
				{component}
				{/*<ComponentHeader/>*/}
				<BodyIndex/>
				<ComponentFooter/>
			</div>
		)
	}
}
//入口定义
ReactDOM.render(
	<Index/>,document.getElementById('example')
);
