
import React, { useState } from 'react';
import AddUser from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

function App() {
  // create a state for working with userList
  const [userList, setUserList] = useState([]);

  const AddUserHandler = (userName, userAge) => {
    // expect 2 arguments, name and age
    setUserList((prevUserList) => {
      // get the previous userList then add the new user to the list array
      // add key to each user item
      return [...prevUserList, { name: userName, age: userAge, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      {/* render list with and empty starting array */}
      <UserList users={userList} />

    </div>

  );
}

export default App;
