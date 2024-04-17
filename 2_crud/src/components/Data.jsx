// import { useSelector } from "react-redux";
// import DeleteData from "./DeleteData";
// import UpdateData from "./UpdateData";

// const Data = () => {
//     const user = useSelector((state) => state.userReducer);

//     return (
//         <div>
//             {user.user.map((val, index) => (
//                 <div key={index}>
//                     <h1>{val.name}</h1>
//                     <p>{val.email}</p>
//                     <DeleteData id={val.id} />
//                     <UpdateData id={val.id} />
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Data;


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_USER_PENDING, UPDATE_USER_PENDING } from "../redux-saga/user/action/Action";

const Data = () => {
    const users = useSelector((state) => state.userReducer.user);
    const dispatch = useDispatch();
    const [updatedName, setUpdatedName] = useState("");
    const [updatedEmail, setUpdatedEmail] = useState("");

    const handleUpdate = (userId) => {
        // Dispatch update action with updated data
        dispatch({ type: UPDATE_USER_PENDING, payload: { userId, userData: { name: updatedName, email: updatedEmail } } });
        // Reset form fields after update
        setUpdatedName("");
        setUpdatedEmail("");
    };

    const handleDelete = (userId) => {
        // Dispatch delete action with user ID
        dispatch({ type: DELETE_USER_PENDING, payload: userId });
    };


    return (
        <div>
            {users.map((user, index) => (
                <div key={index}>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                    <input
                        type="text"
                        placeholder="New Name"
                        value={updatedName}
                        onChange={(e) => setUpdatedName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="New Email"
                        value={updatedEmail}
                        onChange={(e) => setUpdatedEmail(e.target.value)}
                    />
                    <button onClick={() => handleUpdate(user.id)}>Update</button>
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Data;

