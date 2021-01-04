import React from 'react';
import {BrowserRouter as Router,  Route,  Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AllSalads from './components/AllSalads/AllSalads';
import Details from './components/Details/Details';
import history from './history';
import Header from './components/Header/Header'
import ComingSoon from './components/ComingSoon/ComingSoon'
import SaladMenu from './components/SaladMenu/SaladMenu'

const Routes = () => (
  <Router history={history}>
    <Header/>
    <Switch>
        {/* <Route exact path="/" component={Header}/> */}
          <Route path="/login" component={Login}></Route>
          <Route path="/home" component={Home}/>
          <Route path="/allsalads" component={AllSalads}/>
          <Route path="/details/:saladid" component={Details}/>
          {/* <Route path='/header' component={Header}/> */}
          <Route path='/comingsoon' component={ComingSoon}/>
          <Route exact path='/saladmenu' component={SaladMenu}/>
          </Switch>
  </Router>
);

export default Routes;