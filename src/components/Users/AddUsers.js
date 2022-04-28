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
                <input id="name" type="text" onChange={nameChangeHandler}></input>
                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number" onChange={ageChangeHandler}></input>
                <Button type="submit">Add Goal</Button>
            </form>
        </Card>
    );
};

export default AddUser;