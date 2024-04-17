import { useDispatch } from 'react-redux';
import { DELETE_USER_PENDING } from "../redux-saga/user/action/Action";

const DeleteData = ({ id }) => {
    const dispatch = useDispatch();

    const handleDelete = () => { 
        dispatch({ type: DELETE_USER_PENDING, payload: id }); 
    }

    return (
        <button type="delete" onClick={handleDelete}>Delete</button>
    );
}

export default DeleteData;
