import React from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
    // With the use of Webpack for styling, there was a need to change the way this way implemented(refer to ln 400-407 in webpack.config.js)
    // Additionally you needed to change the way styles was called from the app.css
    const assignedClasses = [];
    let btnClass = " ";

    if (props.showPerson) {
        btnClass = classes.Red
    };

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    };

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    };

    if (props.persons.length <= 0) {
        assignedClasses.push(classes.shrink);
    };
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <h2>
                This is a pretty bare bones example, but there's still going to be
                some interesting stuff happening here! I promise!
        </h2>
            <p className={assignedClasses.join(" ")}>I blinked did something change...?</p>
            <button
                className={btnClass}
                // onClick={this.switchNameHandler}
                onClick={props.clicked}
            >
                {/* Include last name initials! */}
                Reveal the components!
        </button>
        </div>

    );
};

export default cockpit;

// Much like in the Persons.js, this logic which was originally placed in the App.js was moved here to keep the App.js file free of clutter.
// Again this is to really keep everything more granular and ergo more clean.