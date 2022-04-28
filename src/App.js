
import React from 'react';
import AddUser from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

function App() {
  return (
    <div>
      <AddUser />
      {/* render list with and empty starting array */}
      <UserList users={[]} />

    </div>

  );
}

export default App;
