import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import ComponentList from './components/list';
import BasicLayout from './components/BasicLayout';
import ComponentDetails from './components/details'
//import Info from './components/info'

//import {BrowserRouter as Router, HashRouter,Route, Switch, Link} from 'react-router-dom';
//import {IndexRoute, Redirect, browserHistory, Router,Route, Link ,applyRouterMiddleware} from 'react-router';



export default class Root extends React.Component{
	render(){
		return(
			//这里替换之前的indnx，变成了程序的入口
			<div>
				<HashRouter>
					<div> 
					
						{/* React-Router V2 V3 路由嵌套  */}
						{/*<Route  exact path="/" component={BasicLayout} >
							<Route component={ComponentDetails} path="、details" />
							<Route  exact  component={ComponentList}  path="/list" />
						</Route>*/}
						
						{/* React-Router V4 路由嵌套  */}
					 
						{/*<Route path="/" props={ComponentList} component={ (props) => (
						    <BasicLayout {...props}>
						      <Switch>
 								
						        <Route component={ComponentDetails}  path="/details" />
								<Route component={ComponentList}  path="/list" />
						      </Switch>
						    </BasicLayout>
					 	 )}/>*/}

					</div>
				</HashRouter>
			</div>
		)
	}
}

/*ReactDOM.render(
	<Root/>,document.getElementById('root')
);*/
// <Route  exact  component={ComponentList}  path="/js/list" />