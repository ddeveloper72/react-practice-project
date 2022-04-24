import React from "react";
import Card from "../UI/Card";
import Styles from './AddUsers.module.css';

const AddUser = props => {
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
                <button className="name-card__button" type="submit">Submit</button>
            </form>
        </Card>
    );
};

export default AddUser;