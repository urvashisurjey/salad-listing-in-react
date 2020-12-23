import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

const Routes = () => (
  <BrowserRouter >
      <Switch>
      <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}></Route>
          <Route path="/home" component={Home}/>
      </Switch>
  </BrowserRouter>
);

export default Routes;