// src/forms/UpdateUserForm.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface UpdateUserFormProps {
  userId: string; // userId é obrigatório
}

const UpdateUserForm: React.FC<UpdateUserFormProps> = ({ userId }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    cpf: '',
    name: '',
    role: ''
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    // Fetch user data
    axios.get(`http://localhost:8000/users/${userId}`)
      .then(response => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching user data');
        setLoading(false);
      });
  }, [userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send the updated data to the API
    axios.put(`http://localhost:8000/users/${userId}`, userData)
      .then(response => {
        setSuccessMessage('User updated successfully');
      })
      .catch(error => {
        setError('Error updating user');
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>CPF:</label>
        <input
          type="text"
          name="cpf"
          value={userData.cpf}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Role:</label>
        <input
          type="text"
          name="role"
          value={userData.role}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Update User</button>
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
};

export default UpdateUserForm;
