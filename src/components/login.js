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
            <div class = "container">
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div class="card card-signin my-5">
                        <div class="card-body">
                            <h5 class ="card-title text-center"> Sign in</h5>
                            
                                <div class="form-label-group">
                                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus></input>
                                 <label for="inputEmail">Email address</label>
                                </div>

                                <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required></input>
                <label for="inputPassword">Password</label>
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck1"></input>
                <label class="custom-control-label" for="customCheck1">Remember password</label>
              </div>

                         <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
              <hr class="my-4"></hr>
              <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>
              {this.renderRedirect()}
              <button  class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit" >
              <a href= 'https://e5a40ff6.ngrok.io/auth'>
              <i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook
              </a>
              </button>
              
                           
                        </div>
                        </div>
                    </div>
                </div>
            </div>
      );
    }
  
  }