import React from "react";
import Radium from "radium";
import "../Person/Person.css";

const person = (props) => {
  // In order to have dynamic data for React, you need to use what is called props (Properties for short) to further improve your data
  // This is done by using props.whatever extra information you pass through the app itself! This will go hand in hand with information added into App.js

  const style = {
    "@media (max-width: 500px)": {
      width: "450px"
    }
  };
  // If you want to put specific sizings to specific components, you can specifically place them in the desired component; however, you also need to do some extra work.

  return (
    <div className="Person" style={style}>
      <h1 onClick={props.click}>Hi! My name is {props.name}! I am {props.age} years old! I enjoy {props.hobby} for fun! Aren't I intersting?</h1>
      {/* By inserting the onclick into the h1 bracket, it makes the text of this component change to match a state that is established in the app.js file */}
      <input
        type="text"
        onChange={props.changedName}
        value={props.name}
      />
      <input
        type="text"
        onChange={props.changedHobby}
        value={props.hobby}
      />
      {/* Text boxes can also be used to dynamically modify the DOM.  */}
    </div>
  );
};

export default Radium(person);
