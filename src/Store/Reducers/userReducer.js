import { SET_USER_SAGA, SET_USER } from "../Actions/constants";

const Initial_state = {
    user:{
        name:'lol'
    }
}

export const userReducer = (state = Initial_state , action)=>{
    const {type,user} = action;
    switch (type) {
        case SET_USER:         
        return{
            ...state,
            user
        }
    
        default:
            return state;
    }
}