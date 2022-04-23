 import React from "react";

 const AddUser = props => {

    return (
        <form>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" ></input>
            <label htmlFor="age">Age (years)</label>
            <input id="age" type="number" ></input>
            <button type="submit">Submit</button>
        </form>
    );
 };

 export default AddUser;