import React from 'react';
import ReactDOM from 'react-dom';

import ComponentList from '../components/list';
import ComponentDetails from '../components/details'
import BussinessInfo from '../components/BussinessInfo';
import BussinessKeepsake from '../components/BussinessKeepsake';
import BussinessDevice from '../components/BussinessDevice'
import BussinessTicket from '../components/BussinessTicket'
import BussinessImg from '../components/BussinessImg';
import BussinessOrder from '../components/BussinessOrder'

import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Link
} from 'react-router-dom'

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: ComponentList,
        main: ComponentList
    },
    /*{
        path: '/list',
        sidebar: BussinessInfo,
        main: BussinessInfo
    },
    {
        path: '/details',
        sidebar: ComponentDetails,
        main: ComponentDetails
    },*/
    {
        path: '/ticket',
        sidebar: BussinessTicket,
        main: BussinessTicket
    },
    {
        path: '/device',
        sidebar: BussinessDevice,
        main: BussinessDevice
    },
    {
        path: '/keepsake',
        sidebar: BussinessKeepsake,
        main: BussinessKeepsake
    },
    {
        path: '/order',
        sidebar: BussinessOrder,
        main: BussinessOrder
    },{
        path: '/img',
        sidebar: BussinessImg,
        main: BussinessImg
    }
]

export default class RootRouter extends React.Component {
    render(){
        return (
            <div>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.sidebar}
                    />
                ))}
                {/*<div style={{ flex: 1, padding: '10px' }}>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.main}
                        />
                    ))}
                </div>*/}
            </div>
        );
    }
}
