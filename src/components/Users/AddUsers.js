import React from "react";
import Card from "../UI/Card";
import './AddUsers.css';

const AddUser = props => {
    const AddUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={AddUserHandler}>
            <Card className='name-card'>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text"></input>
                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number"></input>
                <button className="name-card__button" type="submit">Submit</button>
            </Card>
        </form>
    );
};

export default AddUser;