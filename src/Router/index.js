import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setUser} from './../Store/Actions/userActions'

function Router(props) {   
  const dispatch =  useDispatch();
  const user = useSelector(state=>state.user);
    const login =()=>{
        dispatch(setUser());
    } 
    return (
        <div>
           <button onClick={login}>Set user</button>
        </div>
    )
}
 
export default Router;