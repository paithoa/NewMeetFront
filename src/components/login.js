import React from 'react';
import '../App.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import { Section,Form,Label,Button } from 'bloomer';

export default class LoginPage extends React.Component {

   state={
       user: [],
       redirect:false
   }

   setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='https://e5a40ff6.ngrok.io/auth' />
    }
  }

    render() {
      return (
        <div class="card-body">
        <div class="card card-signin my-5">
         <a href= 'https://4f1cbe68.ngrok.io/auth'>
         <i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook
         </a>
         </div>
         </div>
      );
    }
  
  }