import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Styles from './AddUsers.module.css';
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrappers";

const AddUser = props => {
    // define constants for state Ref items
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // error management
    const [error, setError] = useState();

    const AddUserHandler = (event) => {
        event.preventDefault();
        const refUserName = nameInputRef.current.value;
        const refUserAge = ageInputRef.current.value;

        // add data validation with user feedback
        if (refUserName.trim().length === 0 || refUserAge.trim().length === 0) {
            setError(
                {
                    title: 'Invalid input',
                    message: 'Please enter a valid name and age (not an empty value).',
                }
            );
            return;
        } if (+refUserAge < 1) {
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
        props.onAddUser(refUserName, refUserAge);

        // reset form once the submit button is clicked by updating the ref
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';

    };

    // set error to nothing
    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onErrorConfirm={errorHandler} />}
            <Card className={`${Styles['name-card']}`}>
                <form onSubmit={AddUserHandler}>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" ref={nameInputRef}></input>
                    <label htmlFor="age">Age (years)</label>
                    <input id="age" type="number" ref={ageInputRef}></input>
                    <Button type="submit">Add Goal</Button>
                </form>
            </Card>
        </Wrapper>
    );

};

export default AddUser;