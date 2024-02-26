import { FormValuesForLogin } from "../../Pages/Login/Login";
import { FormValues } from "../../Pages/SignUp/SignUp";

class LocalStorageProvider{
    getItem (key:string){
        const savedItem: FormValues[] | FormValuesForLogin | object | number[]  = JSON.parse(localStorage.getItem(key) ?? JSON.stringify([]));
        return savedItem;
    }
    setItem(key:string,data:FormValues[] | FormValuesForLogin | number[]){
        localStorage.setItem(key,JSON.stringify(data));
    }
    removeItem(key:string){
        localStorage.removeItem(key);
    }
}
export const localStorageProvider = new LocalStorageProvider(); 