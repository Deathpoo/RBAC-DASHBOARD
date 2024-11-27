import React, { useState } from "react";

function UserForm({ onAddUser, onEditUser, users }) {
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
    role: "",
    status: "Active",
  });

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      // Edit existing user
      onEditUser(formData);
    } else {
      // Add new user
      onAddUser(formData);
    }
    // Reset the form
    setFormData({ id: null, name: "", email: "", role: "", status: "Active" });
  };

  return (
    <div className="user-form">
      <h2>{formData.id ? "Edit User" : "Add User"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="role"
          placeholder="Role (e.g., Admin, Editor)"
          value={formData.role}
          onChange={handleChange}
          required
        />
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
