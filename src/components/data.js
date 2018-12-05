import React from 'react';
import Home from './home'
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
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
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <Home person = {person} />)}
      </ul>
    )
  }
}