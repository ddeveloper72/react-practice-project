 import React from "react";

 const AddUser = props => {
     const AddUserHandler = (event) => {
         event.preventDefault();
     };

    return (
        <form onSubmit={AddUserHandler}>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" ></input>
            <label htmlFor="age">Age (years)</label>
            <input id="age" type="number" ></input>
            <button type="submit">Submit</button>
        </form>
    );
 };

 export default AddUser;