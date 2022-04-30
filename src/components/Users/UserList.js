import React from "react";
import Card from "../UI/Card";
import Styles from './UserList.module.css';

const UserList = props => {
    return (
        <Card className={Styles.users}>
            <label>Users:</label>
            <ul>
                {props.users.map((user) => (
                    <li>{user.name} ({user.age} years old)</li>
                ))}
            </ul>
        </Card>
    )
}

export default UserList;