import React from 'react';
import {Provider} from 'mobx-react/custom'
import {browserHistory, Router} from "react-router";
import {render} from 'react-dom'

const stores = {}

const routes = {
    childRoutes: [
        {
            path: '/',
            component: App,
        },
        require('./app').default,
        require('./app/Home').default
    ],
    indexRoute: require('./app/Home').default
}

render(
    <Router routes={routes} history={browserHistory}/>
    ,
    document.getElementById('root')
)

