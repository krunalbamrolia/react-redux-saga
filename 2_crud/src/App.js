import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_USER_PENDING } from "./redux-saga/user/action/Action";
import Data from "./components/Data";
import AddData from "./components/AddData";

function App() {

      let dispatch = useDispatch();

      useEffect(()=>{
        dispatch({type : GET_USER_PENDING})
      }, [])

      return (
        <>
        <h1>hello, this is user dashboard</h1>
        <AddData />
        <Data />
        </>
      );
}

export default App;
