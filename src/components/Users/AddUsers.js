import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Styles from './AddUsers.module.css';

const AddUser = props => {
    // define constants for state items
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const AddUserHandler = (event) => {
        event.preventDefault();
        // add data validation with user feedback
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            alert('Inputs cannot be blank')
            return;
        } if (+enteredAge < 0) {
            alert('Age must be greater than 0')
            return;
        }

        // execute onAddUser function passed from App.js via props
        props.onAddUser();
        
        // reset form once the submit button is clicked
        setEnteredName('');
        setEnteredAge('');
    };

    // define functions for setting the new values from inputs
    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
        <Card className={`${Styles['name-card']}`}>
            <form onSubmit={AddUserHandler}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" value={enteredName} onChange={nameChangeHandler}></input>
                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
                <Button type="submit">Add Goal</Button>
            </form>
        </Card>
    );
};

export default AddUser;