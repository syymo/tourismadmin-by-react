import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import ComponentList from './components/list';
import {BrowserRouter, HashRouter,Router,Route, Switch, Link} from 'react-router-dom';
//import {IndexRoute, Redirect, browserHistory, Router,Route, Link ,applyRouterMiddleware} from 'react-router';

export default class Root extends React.Component{
	render(){
		return(
			<HashRouter>
				{/*这里替换之前的indnx，变成了程序的入口*/}
				<div> 
					<Route  exact path="/" component={Index} />
					<Route  exact path="/list" component={ComponentList}   />
				</div>
			</HashRouter>
			
			/*
			<HashRouter>
			    <div>
			      	<Route exact path="/" component={Index} />
			      	<Route  path="/list" component={ComponentList} />
			    </div>
			</HashRouter>	
			*/
		)
	}
}

ReactDOM.render(
	<Root/>,document.getElementById('example')
);


//10-1 00:10:27

