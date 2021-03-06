import './style.scss'

import React from 'react'
import ReactDOM from 'react-dom'
//import { Router, Route, Link,  browserHistory } from 'react-router'
import { Router, Route, useRouterHistory } from 'react-router'
import { createHistory } from "history";
import MainLayout from './components/MainLayout'
import HomeLayout from './components/HomeLayout'
import PageLayout from './components/PageLayout'
import Servizio from './pages/Servizio'
import Contatti from './pages/Contatti'
import Privacy from './pages/Privacy'
import Cookie from './pages/Cookie'


const browserHistory = useRouterHistory(createHistory)({
    //basename: "/home"
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={MainLayout} >
        <Route path="/(home/)" component={HomeLayout} />
        <Route component={PageLayout} >
            <Route path="/(home/)servizio" component={Servizio} />
            <Route path="/(home/)contatti" component={Contatti} />
            <Route path="/(home/)privacy"  component={Privacy} />
            <Route path="/(home/)cookie"   component={Cookie} />
        </Route>
        
    </Route>
        
  </Router>
    
), document.getElementById('main'))