import React from 'react';
import Home from './home';
import Login from './login';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: [],
    loginstatus:true,
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        
        this.setState({ persons });
      })
      .catch(err =>{
        console.log(err)
      })

      axios.get(`https://4f1cbe68.ngrok.io/status`)
      .then(res => {
        const loginstatus = res.data.status;

        this.setState({ loginstatus });
      })
      .catch(err =>{
        console.log(err)
      })
  }

  render() {
     if(this.state.loginstatus === true) {
        return (
        <ul>
          { this.state.persons.map(person => <Home person = {person} />)}
        </ul>)
     }
     else{
    return (
      
      <div>
        
        <Login></Login>
      <hr></hr>
      <ul>
        { this.state.persons.map(person => <Home person = {person} />)}
      </ul>
      </div>
    )
  }
}
}