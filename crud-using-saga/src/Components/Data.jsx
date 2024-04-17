

import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_USER_PENDING, POST_USER_PENDING, UPDATE_USER_PENDING } from '../Redux-saga/User/action/Action';
import defaultUserPoster from './img/profile.jpeg';
import './style.css';
import Swal from 'sweetalert2';

const Data = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [view, setView] = useState(null);
  const users = useSelector(state => state.userReducer.user);
  const dispatch = useDispatch();

  const addUser = () => {
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    // Check if input fields are filled
    if (!email || !password) {
      Swal.fire('Error', 'Email and password are required.', 'error');
      return;
    }

    const data = {
      email,
      password
    };
    dispatch({ type: POST_USER_PENDING, payload: data });

    // Clear input fields after adding user
    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this user!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        dispatch({ type: DELETE_USER_PENDING, payload: id });
        Swal.fire('Deleted!', 'The user has been deleted.', 'success');
      }
    });
  };

  const handleView = (id, index) => {
    const data = users.find(user => user.id === id);
    setView(data);
  };

  const handleChange = e => {
    setView({ ...view, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to update this user!',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!'
    }).then(result => {
      if (result.isConfirmed) {
        dispatch({ type: UPDATE_USER_PENDING, payload: view });
        Swal.fire('Updated!', 'The user has been updated.', 'success');
      }
    });
  };

  return (
    <>
      {/* Form for adding data */}
      <div className="form-container">
        <input type="text" ref={emailRef} placeholder="Email" />
        <input type="password" ref={passwordRef} placeholder="Password" />
        <button onClick={addUser}>Save</button>
      </div>

      {/* User Cards */}
      <div className="user-cards-container">
        {users.map((val, index) => (
          <div className="user-card" key={val.id}>
            <div className="user-photo">
              <img src={val.photo || defaultUserPoster} alt="User" />
            </div>
            <h2>{val.email}</h2>
            <p>{val.password}</p>
            <button className="btn btn-danger me-3" onClick={() => handleDelete(val.id)}>Delete</button>
            <button data-bs-toggle="modal" data-bs-target={`#exampleModal-${val.id}`} onClick={() => handleView(val.id, index)} className="btn btn-primary">Update</button>

            {/* Update Modal */}
            <div className="modal fade" id={`exampleModal-${val.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Update User</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name="email" value={view?.email || ''} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="text" name="password" value={view?.password || ''} onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleUpdate}>Update</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Data;
