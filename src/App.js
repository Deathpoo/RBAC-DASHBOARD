import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import "./index.css";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "user1", email: "user1@gmail.com", role: "Admin", status: "Active" },
    { id: 2, name: "user2", email: "user2@gmail.com", role: "Editor", status: "Inactive" },
  ]);

  const addUser = (user) => setUsers([...users, { ...user, id: Date.now() }]);
  const editUser = (updatedUser) =>
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  const deleteUser = (id) => setUsers(users.filter((user) => user.id !== id));

  return (
    <div className="App">
      <h1>RBAC Dashboard</h1>
      <UserForm onAddUser={addUser} onEditUser={editUser} users={users} />
      <UserTable users={users} onEditUser={editUser} onDeleteUser={deleteUser} />
    </div>
  );
}

export default App;


