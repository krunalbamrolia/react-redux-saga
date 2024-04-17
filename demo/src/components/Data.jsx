import React from 'react'
import { useSelector } from 'react-redux'

const Data = () => {
    let res = useSelector((state) => state.userReducer)
    console.log(res,"qeee");
    return (
        <div>
            {
                res.user.map((val,index) =>{
                    
                    return(
                        <div>
                            <h1>{val.name}</h1>
                            <p>{val.age}</p>
                            <p>{val.email}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Data