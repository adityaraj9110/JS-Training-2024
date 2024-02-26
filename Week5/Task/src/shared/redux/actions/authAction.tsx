import { FormValuesForLogin } from "../../../Pages/Login/Login";
import { FormValues } from "../../../Pages/SignUp/SignUp"
import { LOGIN, LOGOUT, SIGNUP } from "../Constants"


type SignupType = (userInfo:FormValues)=>{type:string,payload:FormValues};
type LoginType = (loginInfo:FormValuesForLogin)=>{type:string,payload:FormValuesForLogin}
type LogoutType = ()=>{type:string}
  
export const signUp:SignupType = (userInfo)=>{
    return {
        type: SIGNUP,
        payload:userInfo
    }
}

export const login:LoginType = (loginInfo)=>{
    return {
        type:LOGIN,
        payload:loginInfo
    }
}
export const logout:LogoutType = ()=>{
    return {
        type:LOGOUT
    }
}