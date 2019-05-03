import React from "react";
import "../Person/Person.css";

const person = props => {
  // In order to have dynamic data for React, you need to use what is called props (Properties for short) to further improve your data
  // This is done by using props.whatever extra information you pass through the app itself! This will go hand in hand with information added into App.js

  return (
    <div className="Person">
      <h1>
        Hi! My name is {props.name}! I am {props.age} years old! I enjoy {props.hobby} for fun! Aren't I intersting?
      </h1>
    </div>
  );
};

export default person;
