import React from "react";
import Person from "./Person/Person"

const persons = (props) => props.persons.map((person, index) => {
    return <Person
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        hobby={person.hobby}
        key={person.id}
        changedName={(event) => props.changed1(event, person.id)}
        changedHobby={(event) => props.changed2(event, person.id)}
    />
})

export default persons;