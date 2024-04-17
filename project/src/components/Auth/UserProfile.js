import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const currentUser = useSelector(state => state.currentUser);

  return (
    <div>
      <h2>User Profile</h2>
      {currentUser ? (
        <div>
          <p><strong>ID:</strong> {currentUser.id}</p>
          <p><strong>Name:</strong> {currentUser.name}</p>
          <p><strong>Email:</strong> {currentUser.email}</p>
          <p><strong>Status:</strong> {currentUser.isActive ? 'Active' : 'Inactive'}</p>
        </div>
      ) : (
        <p>No user logged in.</p>
      )}
    </div>
  );
};

export default UserProfile;
