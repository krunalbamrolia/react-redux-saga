import React from 'react'
import { useDispatch } from 'react-redux';
import { UPDATE_USER_PENDING } from '../redux-saga/user/action/Action';


const UpdateData = ({id}) => {
    const dispatch = useDispatch();

    const handleUpdate = () => { 
        dispatch({ type: UPDATE_USER_PENDING, payload: id }); 
    }
  return (
    <button type="sumbit" onClick={handleUpdate}>Update</button>
  )
}

export default UpdateData