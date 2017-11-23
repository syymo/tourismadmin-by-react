import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import ComponentList from './components/list';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
//import {IndexRoute, Redirect, browserHistory, Router,Route, Link ,applyRouterMiddleware} from 'react-router';

export default class Root extends React.Component{
	render(){
		return(
			<BrowserRouter>
				//这里替换之前的indnx，变成了程序的入口
				<div>
					<Route component={Index}  path="/" />
					<Route  component={ComponentList}  path="/list" />
				</div>
			</BrowserRouter>
			
			/*
			<Router>
			    <div>
			      <ul>
			        <li><Link to="/">index</Link></li>
			        <li><Link to="/list">Topics</Link></li>
			      </ul>

			      <hr />

			      <Route exact path="/" component={Index} />
			      <Route  path="/list" component={ComponentList} />
			    </div>
			 </Router>	
			 */
		)
	}
}


ReactDOM.render(
	<Index/>,document.getElementById('example')
);


//10-1 00:10:27

