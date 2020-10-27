import { UPDATE_USER, REMOVE_USER, SET_USER_SAGA } from "../constants"

export const setUser = (action)=>{ 
    return{
        type:SET_USER_SAGA ,
        user:action.user
    }
}
export const update_user = ()=>{
    return{
        type:UPDATE_USER,
        payload:{}
    }
}
export const signOut = ()=>{
    return{
        type:REMOVE_USER,
        payload:{}
    }
}