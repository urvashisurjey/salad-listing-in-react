import React, { Component } from 'react';
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import SaladMenu from './components/SaladMenu/SaladMenu'
import AllSalads from './components/AllSalads/AllSalads'
import { Route } from 'react-router-dom';
import Routes from './routes'
class App extends Component {

  constructor(){
    super();
    this.state={
      appName: "Banana",
      home: false
    }
  }

  render() {
    return (
      <>
<AllSalads/>    
<Routes/>      
</>
    );
  }
}

export default App;
