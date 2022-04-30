
import React, {useState} from 'react';
import AddUser from './components/Users/AddUsers';
import UserList from './components/Users/UserList';
import { useState } from 'react';

function App() {
  // create a state for working with userList
  const [userList, setUserList] = useState([]);

  return (
    <div>
      <AddUser />
      {/* render list with and empty starting array */}
      <UserList users={[]} />

    </div>

  );
}

export default App;
