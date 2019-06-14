import React from "react";

const cockpit = (props) => {
    return (
        <div>
            <h1>Hi, I'm the beginning of a basic React App!</h1>
            <h2>
                This is a pretty bare bones example, but there's still going to be
                some interesting stuff happening here! I promise!
        </h2>
            <p className={assignedClasses.join(" ")}>I blinked did something change...?</p>
            <button
                className={btnClass}
                // onClick={this.switchNameHandler}
                onClick={this.togglePersonHandler}
            >
                {/* Include last name initials! */}
                Reveal the components!
        </button>
        </div>

    );
};

export default cockpit