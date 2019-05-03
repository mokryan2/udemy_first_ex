import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";
import "./Person/Person.css";

class App extends Component {
  state = {
    persons: [{ name: "Ryan", age: "27", hobby: "playing music" }]
  };

  render() {
    // JSX elements will be added here by means of components!
    return (
      <div className="App">
        <h1>Hi, I'm the beginning of a basic React App!</h1>
        <h2>
          This is a pretty bare bones example, but there's still going to be
          some interesting stuff happening here! I promise!
        </h2>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          hobby={this.state.persons[0].hobby}
          // Remember how I said back in the Person.js component that you can make your data dynamic? This is how and where you put it to work!
        />
      </div>
    );
  }
}

export default App;
