import { useDispatch } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { GET_USER_PENDING } from "../src/redux-saga/user/action/Action";
import Data from './components/Data';


function App() {

  let dispatch = useDispatch();

  useEffect(()=>{
    dispatch({type :GET_USER_PENDING})
  },[])

  return (
    <>
    <h1>hello this is redux-saga</h1>
    <Data />
    </>
  );
}
export default App;