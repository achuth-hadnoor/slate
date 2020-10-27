import { LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from "../constants";

 export const authReducer = (state = [] ,action)=>{   
     console.log(action);
     
     let{type,user} = action
     switch (type) {
         case LOGIN_USER_SUCCESS:
            console.log('im here too mate');
            return{
                ...state,user
            }    
        case LOGIN_USER_ERROR:
            console.log('im here too mate');
            return{
                ...state,user
            }    
        default:
            return state;
    }
} 