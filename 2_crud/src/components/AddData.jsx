import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { POST_USER_PENDING } from '../redux-saga/user/action/Action'

const AddData = () => {
    let name = useRef()
    let email = useRef()

    let dispatch = useDispatch()
    let addToDatabase = ()=> {
        
        let data ={
            name:name.current.value, 
            email:email.current.value
        };
        dispatch({type:POST_USER_PENDING, payload:data});
    }

    return (
        <>
            <h1>AddData to Database</h1>
            <input type="text" name="name" ref={name} /><br />
            <input type="text" name="email" ref={email} /><br />
            <button onClick={addToDatabase} >Submit</button><br/>
        </>

    )
}

export default AddData