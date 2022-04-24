import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Styles from './AddUsers.module.css';

const AddUser = props => {
    // define constants for state items
const [enteredUsername, setEnteredUsername] = useState('');

    const AddUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card className={`${Styles['name-card']}`}>
            <form onSubmit={AddUserHandler}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text"></input>
                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number"></input>
                <Button type="submit">Add Goal</Button>
            </form>
        </Card>
    );
};

export default AddUser;