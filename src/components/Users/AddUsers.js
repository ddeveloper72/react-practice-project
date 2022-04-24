import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Styles from './AddUsers.module.css';

const AddUser = props => {
    // define constants for state items
    const [enteredName, setEnteredName] = useState('');

    const AddUserHandler = (event) => {
        event.preventDefault();
    };

    // define function for setting the new value from the input
    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    return (
        <Card className={`${Styles['name-card']}`}>
            <form onSubmit={AddUserHandler}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" onChange={nameChangeHandler}></input>
                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number"></input>
                <Button type="submit">Add Goal</Button>
            </form>
        </Card>
    );
};

export default AddUser;