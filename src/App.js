import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";
import "./Person/Person.css";

class App extends Component {
  state = {
    persons: [
      { name: "Ryan", age: "27", hobby: "playing music" },
      { name: "Russell", age: "27", hobby: "riding bikes" }
    ]
  };

  hobbyHandler = (newHobby) => {
    this.setState({
      persons: [
        { name: "Ryan", age: "27", hobby: newHobby },
        { name: "Russel", age: "27", hobby: newHobby }
      ]
    })
  };
  //This is an example of an event handler that is equipped to work with state in React. While very useful, there is a mild issue that arises w/ the methodology used to make this happen.
  //Due to the fact this uses what is called a "bind" method, the result is that depending on which component you click in the browser will cause the new hobby to change to the same thing.
  //There most likely is a workaround for this through creating an additional handler, but it'll require some work to figure it out eventually. 

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Ryan", age: "27", hobby: "playing music" },
        { name: event.target.value, age: "27", hobby: "riding bikes" }
      ]
    })
  };
  // This handler is meant to work with the text box that was added to the person component starting on line 12
  // What this does is allow the user to immediately change a piece of data held within the controller before their very eyes!

  hobbyChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Ryan", age: "27", hobby: "playing music" },
        { name: "Russell", age: "27", hobby: event.target.value }
      ]
    })
  };
  // This is just an additional handler added in meant to controll the hobby
  // As you can see, these handlers are limited to just one of the Person components due to the fact that if I were to add this to both
  // both of the components would produce the exact same change. For the sake of displaying what React can do though, I've left it to just the one

  render() {
    // JSX elements will be added here by means of components or general HTML!
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
          click={this.hobbyHandler.bind(this, "Cooking copious amounts of food")}
        // Remember how I said back in the Person.js component that you can make your data dynamic? This is how/where you put it to work!
        />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          hobby={this.state.persons[1].hobby}
          click={this.hobbyHandler.bind(this, "brewing my own beer")}
          changedName={this.nameChangeHandler}
          changedHobby={this.hobbyChangeHandler}
        // This is another basic, but useful function of React; the component is smart enought to follow the same format as the previous interation while using different data!
        />
      </div>
    );
  }
}

export default App;
