import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";
import "./Person/Person.css";

class App extends Component {
  state = {
    persons: [
      { name: "Ryan", age: "27", hobby: "playing music" },
      { name: "Russell", age: "27", hobby: "riding bikes" },
      { name: "Nishi", age: "27", hobby: "playing with cats" }
    ]
  };

  hobbyHandler = (newHobby) => {
    this.setState({
      persons: [
        { name: "Ryan", age: "27", hobby: newHobby },
        { name: "Russel", age: "27", hobby: newHobby },
        { name: "Nishi", age: "27", hobby: newHobby }
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
        { name: event.target.value, age: "27", hobby: "riding bikes" },
        { name: "Nishi", age: "27", hobby: "playing with cats" }
      ]
    })
  };
  // This handler is meant to work with the text box that was added to the person component starting on line 12
  // What this does is allow the user to immediately change a piece of data held within the controller before their very eyes!

  hobbyChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Ryan", age: "27", hobby: "playing music" },
        { name: "Russell", age: "27", hobby: event.target.value },
        { name: "Nishi", age: "27", hobby: "playing with cats" }
      ]
    })
  };
  // This is just an additional handler added in meant to controll the hobby
  // As you can see, these handlers are limited to just one of the Person components due to the fact that if I were to add this to both
  // both of the components would produce the exact same change. For the sake of displaying what React can do though, I've left it to just the one

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Ryan M.", age: "27", hobby: "playing music" },
        { name: "Russell P.", age: "27", hobby: "riding bikes" },
        { name: "Ryan N.", age: "27", hobby: "playing with cats" }
      ]
    })
  };
  // You can also manipulate data within the DOM by using buttons to update information!

  render() {
    // JSX elements will be added here by means of components or general!
    return (
      <div className="App">
        <h1>Hi, I'm the beginning of a basic React App!</h1>
        <h2>
          This is a pretty bare bones example, but there's still going to be
          some interesting stuff happening here! I promise!
        </h2>

        <button
          onClick={this.switchNameHandler}>
          Include last name initials!
        </button>

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

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          hobby={this.state.persons[2].hobby}
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


// ------------------ Alternative State methods through Hooks!---------------------//
// Aside from using the current methods mentioned above, there is a new methodology called using Hooks to manage state manipulation.
// Going forward, this most likley will be the new trend, but it's still kind of new so it'll take some getting used to.
// What this change will require affects some of the initial set up

// import React, { Component } from "react"; will now be replaced with import React, { useState } from "react";
// class App extends Component will be replaced with const app(or App either one really)= props => {}
// the render method will be removed just like in a functional component and will just return()

// Ideally, the start of the app will look like:

// import React, { useState } from "react";
// import Person from "./Person/Person";
// import "./App.css";
// import "./Person/Person.css";

// const app = props => {
//   const  [personsState (refer to line 163), setPersonsState (refer to line 128)] = useState({
//     persons: [
//       { name: "Ryan", age: "27", hobby: "playing music" },
//       { name: "Russell", age: "27", hobby: "riding bikes" }
//     ]
//   });
// ---The useState hook will always return an array with exactly 2 elements. 
// The first element will always be the current state; the second will always be a function that allows us to update the state so the component will be re-rendered
// You'll use array destructuring so that you can pull information from the function


// const switchNameHandler = () => {
//   setPersonsState({
//     persons: [
//       { name: "Ryan M.", age: "27", hobby: "playing music" },
//       { name: "Russell P.", age: "27", hobby: "riding bikes" }
//     ]
//   })
// };

// You can use this method because hooks allow functions. You just need to put it within a variable and replace this.setState with 
// setPersonsState which is established within the destructured array

// return (
//   <div className="App">
//     <h1>Hi, I'm the beginning of a basic React App!</h1>
//     <h2>
//       This is a pretty bare bones example, but there's still going to be
//       some interesting stuff happening here! I promise!
//     </h2>

//     <button
//       onClick={switchNameHandler}>
//       Include last name initials!
//     </button>

// ----The this for the button becomes irrelevant because of Hooks; what this means is that you can just call the function to make it work.
// ALSO, remmeber that you don't need to include parenthesis after the funciton is called becuase it will cause the function to activate outside of it's intended use.

//     <Person
//       name={personsState.persons[0].name}
//       age={personsState.persons[0].age}
//       hobby={personsState.persons[0].hobby}
//       click={this.hobbyHandler.bind(this, "Cooking copious amounts of food")}
//     // Remember how I said back in the Person.js component that you can make your data dynamic? This is how/where you put it to work!
//     />

// ---- Note that the this.state is now replaced with the personsState due to the implementation of hooks.
// Due to the fact that this no longer is a class based components, you HAVE to do this switch

//     <Person
//       name={personsState.persons[1].name}
//       age={personsState.persons[1].age}
//       hobby={personsState.persons[1].hobby}
//       click={this.hobbyHandler.bind(this, "brewing my own beer")}
//       changedName={this.nameChangeHandler}
//       changedHobby={this.hobbyChangeHandler}
//     // This is another basic, but useful function of React; the component is smart enought to follow the same format as the previous interation while using different data!
//     />
//   </div>
// );
// 
// export default app;


// While this is all good and fine for manipulating state, note that the way state is managed will be different!
// The function that is passed into the initial state will not merge with the original state. In other words, the state might be missing original pieces of information.
// You need to make sure you manually add in any different information, but there is a better way by implementing useState multiple times to account for additional information.