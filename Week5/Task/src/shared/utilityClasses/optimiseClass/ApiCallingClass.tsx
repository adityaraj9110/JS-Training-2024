import {  Data, ResponseData } from "../../dataTypes/ProductType";
import ApiProviderClass from "./ApiProviderClass"


export class ApiCalling extends ApiProviderClass{
    getAllData = ()=>{
        return this.get<ResponseData>("");
    }
    getProductById = (id:string)=>{
        return this.get<Data>(`/${id}`)
    }
}
export const apicalling = new ApiCalling();