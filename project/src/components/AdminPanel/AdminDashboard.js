import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { activateUser, deactivateUser } from '../../redux-saga/actions';

const AdminDashboard = () => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const handleActivate = (userId) => {
    dispatch(activateUser(userId));
  };

  const handleDeactivate = (userId) => {
    dispatch(deactivateUser(userId));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.isActive ? 'Active' : 'Inactive'}</td>
              <td>
                {user.isActive ? 
                  <button onClick={() => handleDeactivate(user.id)}>Deactivate</button> :
                  <button onClick={() => handleActivate(user.id)}>Activate</button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
