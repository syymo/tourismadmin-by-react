import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


const defaultProps = {
	userName: '这是一个默认的用户名',
}

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

	constructor(){
		super();
		this.state = {
			miniHeader: false	// 默认加载的是高的头部
		}
	};
	switchHeader(){
		this.setState({
			miniHeader: !this.state.miniHeader
		});
	};

	render(){
		var userName = 'Parry';
		var html = '<label>Imooc&nbsp;Syymo</label>';
		const styleComponentHeader = {
			header: {
				height: "100px",
				backgroundColor: "#CCCCCC",
				color: "#FFFFFF",
				paddingTop: (this.state.miniHeader) ? "15px" : "25px",
				paddingBottom: (this.state.miniHeader) ? "15px" : "25px"
			},
			//还可以定义其他的样式

		}
		return (
			<header style={styleComponentHeader.header} className="haerderMenu" /*onClick={this.switchHeader.bind(this)}*/>
				{/*userName == '' ? '用户未登录' : '用户名：' + userName*/}
				{/*<p>{html}</p>*/}
				{/*<p dangerouslySetInnerHTML = {{__html:html}}></p>*/}
				<p className="minifooter">接收到的父页面的属性：userId：{this.props.userId}{this.props.userName}</p>
				<ul style={styleComponentHeader.ul} >
					<li><a href="#">首页</a></li>
					<li><a href="#">门票</a></li>
					<li><a href="#">设备</a></li>
					<li><a href="#">纪念品</a></li>
				</ul>
			</header>
		)
	}
}

ComponentHeader.propTypes = {
	userId: PropTypes.number.isRequired
	//isRequired必须的参数
};
ComponentHeader.defaultProps = defaultProps;
//	defaultProps 给props定义一个默认的值
//	如果有值传入则取代此默认值


