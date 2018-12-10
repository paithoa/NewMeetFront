import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './components/home'
import Data from './components/data'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/login'
import RegisterBox from './components/register'
import { Provider } from 'react-redux'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }


  render() {
    return (
     <Router>
      <div>
  
        <Link to="/">homepage</Link>
        
     
        <Route path="/" component={Data} />
      
      
      </div>
      

    
   

    </Router>

    

     
    );
  }
}

export default App;
