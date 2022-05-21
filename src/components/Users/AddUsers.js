import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Styles from './AddUsers.module.css';
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrappers";

const AddUser = props => {
    useRef();
    
    // define constants for state items
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    // error management
    const [error, setError] = useState();

    const AddUserHandler = (event) => {
        event.preventDefault();
        // add data validation with user feedback
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError(
                {
                    title: 'Invalid input',
                    message: 'Please enter a valid name and age (not an empty value).',
                }
            );
            return;
        } if (+enteredAge < 1) {
            setError(
                {
                    title: 'Invalid age',
                    message: 'Please enter a valid age (greater than 0).',
                }
            );
            return;
        };

        // execute onAddUser function passed from App.js via props
        // pass in the the 2 data elements, name and age
        props.onAddUser(enteredName, enteredAge);

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

    // set error to nothing
    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onErrorConfirm={errorHandler}/>}
            <Card className={`${Styles['name-card']}`}>
                <form onSubmit={AddUserHandler}>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" value={enteredName} onChange={nameChangeHandler}></input>
                    <label htmlFor="age">Age (years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
                    <Button type="submit">Add Goal</Button>
                </form>
            </Card>
        </Wrapper>
    );

};

export default AddUser;