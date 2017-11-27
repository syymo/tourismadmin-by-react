import React from 'react';
import ReactDOM from 'react-dom';
import RootRouter from '../route/router'
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

import {
  BrowserRouter as Router,
  HashRouter,
  Link
} from 'react-router-dom'


export default class BasicLayout extends React.Component {
    constructor(e){
        super(); //调用基类的所有初始化方法
        this.state = {
            collapsed: false
        };
    
    	this.toggle = () => {
    	  	if(this.state.collapsed){
    	  		document.getElementsByClassName("submenutitle")[0].display = "none";
            }
      		this.setState({
      		    collapsed: !this.state.collapsed,
      		});
    	}
	};
	
	render(){
		return (
          <HashRouter>
  			<div id="components-layout-demo-custom-trigger">
    			<Layout>
            <Sider
              breakpoint="md"
              collapsed={this.state.collapsed}
        	 // onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
            >
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/">
                    <Icon type="user" />
                    <span className="nav-text">商家</span>
                </Link>
              </Menu.Item>
              <SubMenu key="sub1" title={<span ><Icon type="user" /><span className="submenutitle">导航一</span></span>}>
                <Menu.Item key="1-1">选项1</Menu.Item>
                <Menu.Item key="1-2">选项2</Menu.Item>
                <Menu.Item key="1-3">选项3</Menu.Item>
                <Menu.Item key="1-4">选项4</Menu.Item>
              </SubMenu>
                
                <Menu.Item key="2">
                  <Link to="/ticket">
                    <Icon type="wallet" />
                    <span className="nav-text">门票</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/device">
                    <Icon type="rocket" />
                    <span className="nav-text">设备</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/keepsake">  
                    <Icon type="gift" />
                    <span className="nav-text">纪念品</span>
                  </Link>  
                </Menu.Item>
                <Menu.Item key="5">
                  <Link to="/order">
                    <Icon type="solution" />
                    <span className="nav-text">订单</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Link to="/img">
                    <Icon type="camera" />
                    <span className="nav-text">轮播图</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Header>
              <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>

                <div id="content">
                  <RootRouter/>
                </div>
              </Content>
            </Layout>
          </Layout>
        </div>
      </HashRouter>
		);
	}
}

