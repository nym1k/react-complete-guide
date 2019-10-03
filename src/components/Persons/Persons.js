import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
    return <Person
        age={person.age}
        click={() => props.clicked(index)}
        key={person.id}
        name={person.name}
        changed={(event) => props.changed(event, person.id)} />
});

export default persons;