import { ApiResponseType, DataType } from "../DataTypes/ResponsedataType";
import ApiService from "./apiService";

class ApiProvider extends ApiService {

      // getAllD(id:string):Promise<APIResponse<DataType>>{

      //   return this.get<DataType>('/api');

      // }
  private baseUrl = "https://dummyjson.com/products";

  getAllProducts(skip: number,offset:number): Promise<ApiResponseType<DataType>> {
    return this.getAllData(this.baseUrl, skip,offset);
  }
  getAllProductsByIds(ids:string[]):Promise<DataType[]>{
    return this.getAllDataByIds(this.baseUrl,ids);
  }
}
export const apiProvider = new ApiProvider();

// type APIResponse<T extends Record<string,any>> = {
//   totalData: number,
//   limit: number
//   data:T[]
// }
