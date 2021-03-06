import React, { Component } from "react";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
import classes from "./App.css";

// Due to the change of methodology for styling via Webpack, you need to call in the styles as if you were calling in specific packages

class App extends Component {
  state = {
    persons: [
      { id: "23rfef", name: "Ryan", age: "27", hobby: "playing music" },
      { id: "sdfews", name: "Russell", age: "27", hobby: "riding bikes" },
      { id: "tyjrty", name: "Nishi", age: "27", hobby: "playing with cats" }
    ],
    showPersons: false
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

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  };
  // Given this method, the goal is to not mutate the original state. What is happening here is the personIndex constant is finding the singular specific id, the person constant 
  // is using a spread operator to copy the original state and create a new array all together (keeping the original state untouched), person.name allows us to update the array at the specifc
  // position, and then allow us to dynamically update the DOM.

  hobbyChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.hobby = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  };
  // Refer to line 48

  deletePesonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  // This particular method first acquires the state, removes the specific element by using the index of the person, and then updating the state; however,
  // theres a bit of a problem because this mutates the original state (const persons = this.state.persons;). What you should do is copy the array into a new constant.
  // and then use a spread (...) to maintain the original state

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  };
  // This handler is meant to be used in a CONDITIONAL situation. It works, but it's not exactly the best method.

  render() {
    // JSX elements will be added here by means of components or general!

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePesonHandler}
        changed1={this.nameChangeHandler}
        changed2={this.hobbyChangeHandler}
      />;

      // Thanks to the change in methodology from webpack, you can add conditional rendering this way by setting a variable and calling the styles
    };

    return (
      <div className={classes.App}>
        {/* Because we changed to webpack styling methdology, we need to also account for the change in syntax */}
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
        {/* This persons, which is established in the render(), allows the conditional rendering to happen */}

      </div>
    );
  }
}

export default App;

// You need to import Radium to allow the useage of pseudo selectors. In doing this, the app becomes a higher order component.


// ------------------ Alternative State methods through Hooks!---------------------//
// Aside from using the current methods mentioned above, there is a new methodology called using Hooks to manage state manipulation.
// Going forward, this most likley will be the new trend, but it's still kind of new so it'll take some getting used to.
// What this change will require affects some of the initial set up

// import React, {Component} from "react"; will now be replaced with import React, {useState} from "react";
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

// --------------------------------------- Alternative Conditional Rendering ---------------------------------------

// switchNameHandler = () => {
//   this.setState({
//     persons: [
//       { name: "Ryan M.", age: "27", hobby: "playing music" },
//       { name: "Russell P.", age: "27", hobby: "riding bikes" },
//       { name: "Ryan N.", age: "27", hobby: "playing with cats" }
//     ]
//   })
// };
// // You can also manipulate data within the DOM by using buttons to update information!




// {
//   this.state.showPersons === true ?
//     <div>
//       <Person
//         name={this.state.persons[0].name}
//         age={this.state.persons[0].age}
//         hobby={this.state.persons[0].hobby}
//         click={this.hobbyHandler.bind(this, "Cooking copious amounts of food")}
//       // Remember how I said back in the Person.js component that you can make your data dynamic? This is how/where you put it to work!
//       />

//       <Person
//         name={this.state.persons[1].name}
//         age={this.state.persons[1].age}
//         hobby={this.state.persons[1].hobby}
//         click={this.hobbyHandler.bind(this, "brewing my own beer")}
//         changedName={this.nameChangeHandler}
//         changedHobby={this.hobbyChangeHandler}
//       // This is another basic, but useful function of React; the component is smart enought to follow the same format as the previous interation while using different data!
//       />

//       <Person
//         name={this.state.persons[2].name}
//         age={this.state.persons[2].age}
//         hobby={this.state.persons[2].hobby}
//         click={this.hobbyHandler.bind(this, "brewing my own beer")}
//         changedName={this.nameChangeHandler}
//         changedHobby={this.hobbyChangeHandler}
//       // This is another basic, but useful function of React; the component is smart enought to follow the same format as the previous interation while using different data!
//       />
//     </div> : null
// }
// {/* What's happening here is that by placing the components in a div and then wrapping with { }, it allows us to insert a simple ternary statement.
//   This is meant to work in tandem with the showPersons state that is established initially.*/}

//  This method, while it does technically work, is mildly inelegant for it's intended purpose. It causes a lot of unneccesary clutter within the actual code.
//  By using the current method that is inserted prior to the return(), it allows the initial template of the page to remain much cleaner.


// ============================= Using Radium to style pseudo elements ==================

// import Radium, { StyleRoot } from "radium";
// The <StyleRoot /> tag needs to wrap around the entire div app to work!

// ,
//       ":hover": {
//         backgroundColor: "lightGreen",
//         color: "black"
//       }
// Because of the radium package, we're allowed to use the pseudo selectors for the inline styles!

// style[":hover"] = {
//   backgroundColor: "salmon",
//   color: "black"
// }

// While using Radium is one method, you can also used WebPack.