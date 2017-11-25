import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import ComponentList from './components/list';
import BasicLayout from './components/BasicLayout';
import ComponentDetails from './components/details'

//import {BrowserRouter, HashRouter,Router,Route, Switch, Link} from 'react-router-dom';
//import {IndexRoute, Redirect, browserHistory, Router,Route, Link ,applyRouterMiddleware} from 'react-router';



export default class Root extends React.Component{
	render(){
		return(
			//这里替换之前的indnx，变成了程序的入口
			<div>
				<HashRouter>
					{/*<div> 
					

						<Route component={ComponentDetails} path="/details"></Route>
						<Route  exact path="/" component={BasicLayout} >
						</Route>

						<Route  exact  component={ComponentList}  path="/list" />
						
					</div>*/}
				</HashRouter>
			</div>
		)
	}
}

/*ReactDOM.render(
	<Root/>,document.getElementById('root')
);*/
// <Route  exact  component={ComponentList}  path="/js/list" />