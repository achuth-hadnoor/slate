import { LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from "../constants";

 export const authReducer = (state = [] ,action)=>{         
     switch (action.type) {
         case LOGIN_USER_SUCCESS:  
            return{
                ...state,
                user:action.user
            }    
        case LOGIN_USER_ERROR: 
            return{
                ...state,
                error:action.error
            }    
        default:
            return state;
    }
} 