import axios from "axios";

export default class ApiProvider {
  private baseUrl = "https://dummyjson.com/products";

  getAllData = async () => {
    const response = await axios({
      url: `${this.baseUrl}`,
      method: "GET",
    });
    console.log(response);
    return response.data.products;
  }; // make separated class, where we have to manage the all apis....

  getProductById = async (id: number) => {
    const response = await axios({
      url: `${this.baseUrl}/${id}`,
      method: "GET",
    });
    return response.data;
  };

    //same
  getProductsByIds = async (ids: number[] | undefined) => {
    try {
      if (ids) {
        const data = await Promise.all(
          ids.map((id) => {
            const data = this.getProductById(id);
            return data;
          })
        );
        return data;
      }
    } catch (error: unknown) {
      throw new Error("Could not find product");
    }
  };

  // duplicationcy
  deleteProductById = async (id: number) => {
    try {
      await axios({ url: `${this.baseUrl}/${id}`, method: "DELETE" });
    } catch (error) {
      console.log(error);
    }
  };
}

export const apiProvider = new ApiProvider();
