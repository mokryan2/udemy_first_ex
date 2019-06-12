import React from "react";
import styles from "../Person/Person.css";

// Due to the change of methodology for styling via Webpack, you need to call in the styles as if you were calling in specific packages

const person = (props) => {
  // In order to have dynamic data for React, you need to use what is called props (Properties for short) to further improve your data
  // This is done by using props.whatever extra information you pass through the app itself! This will go hand in hand with information added into App.js

  const rnd = Math.random();
  if (rnd > .7) {
    throw new Error("Something went wrong")
  };
  // Refer to the ErrorBoundary Component to understand the purpose of said code

  return (
    <div className={styles.Person}>
      {/* Because we changed to webpack styling methdology, we need to also account for the change in syntax */}
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

export default person;


// ============================= Using Radium to style pseudo elements ==================

// import Radium from "radium";

// const style = {
//   "@media (max-width: 500px)": {
//     width: "450px"
//   }
// };
// // If you want to put specific sizings to specific components, you can specifically place them in the desired component; however, you also need to do some extra work.