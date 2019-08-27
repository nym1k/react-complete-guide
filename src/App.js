import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Ross', age: 30 },
      { name: 'Max', age: 28 },
      { name: 'Zoe', age: 23 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // Dont do this!! : this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: 'Ross', age: 30 },
        { name: newName, age: 29 },
        { name: 'Zoe', age: 23 }
      ] 
    } )
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Ross', age: 30 },
        { name: event.target.value, age: 29 },
        { name: 'Zoe', age: 23 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}>Banana</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
