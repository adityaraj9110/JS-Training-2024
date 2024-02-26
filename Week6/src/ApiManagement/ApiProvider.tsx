import axios from "axios";
import { DataType } from "../DataType";

class ApiProvider {
  private baseUrl = "http://localhost:3000/books";

  getData = async () => {
    return await axios({
      url: `${this.baseUrl}`,
      method: "GET",
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };
  addPost = async (post:DataType) => {
    await axios({
      url: `${this.baseUrl}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      data:JSON.stringify(post)
      
    }).then((res)=>{
        return res.data;
    }).catch((err)=>{
        throw new Error(err.message);
    });

  };
}
export const apiProvider = new ApiProvider();
