import { ResponseData } from "../data-type/DataType";
import axios from "axios";

type GetDataType = () => Promise<ResponseData[]>;

class ApiService {
  private baseUrl = "https://picsum.photos/v2/list";

  
  
  getData: GetDataType = (): Promise<ResponseData[]> => {
    return axios
      .get(this.baseUrl)
      .then((response) => {
        console.log(response.data)
        return response.data;
      })
      .catch((error) => {
        return error.message;
      });
  };
}

export const apiService = new ApiService();