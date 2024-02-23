import { Data, ResponseData } from "../dataTypes/ProductType";
// handle apis call at the one place,
// error nandling and all thing should be there...
// class APisSer{
//   any get(){

//   }
// }

export default class ApiProvider {
  private baseUrl = "https://dummyjson.com/products";
  private limit: number = 20;
  private skip: number = 1;
  private fetchedData = new Map<string, Data[]>();

  getAllData = async (limit: number = 20, skip: number = 0) => {
    this.limit = limit;
    this.skip = (skip - 1) * limit;

    const key = `${limit}-${skip}`;

    if (this.fetchedData.get(key) === undefined) {
      const response = await fetch(
        `${this.baseUrl}?limit=${this.limit}&skip=${this.skip}`
      );
      const data: ResponseData = await response.json();
      this.fetchedData.set(key, data.products);
      return data.products;
    } else {
      return this.fetchedData.get(key);
    }
  };

  getAllCategories = async () => {
    const response = await fetch(`${this.baseUrl}/categories`);
    const data: string[] = await response.json();
    return data;
  };

  getSearchedCategory = async (searchItem: string | null) => {
    if (searchItem === "All Item") {
      console.log("hello");
      return this.getAllData(20, 1);
    }

    const key = `category-${searchItem}`;
    const cachedData = this.fetchedData.get(key);

    if (cachedData) {
      return cachedData;
    }

    const response = await fetch(`${this.baseUrl}/category/${searchItem}`);
    const data = await response.json();

    this.fetchedData.set(key, data.products);

    return data.products;
  };

  getSearchedQuery = async (searchItem: string | null) => {
    if (searchItem) {
      const response = await fetch(`${this.baseUrl}/search?q=${searchItem}`);
      const data = await response.json();
      return data.products;
    } else {
      return this.getAllData(20, 1);
    }
  };

  getProductById = async (id: number) => {
    // https://dummyjson.com/products/2
    const response = await fetch(`${this.baseUrl}/${id}`);
    const data: Data = await response.json();
    return data;
  };

  getProductsByIds = async (ids: number[] | undefined) => {
    // do not messup everythings
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
      console.log(error);
      // throw new Error('Could not find product')
    }
  };

  deleteProductById = async (id: number) => {
    try {
      await fetch(`${this.baseUrl}/${id}`, { method: "DELETE" });
    } catch (error) {
      console.log(error);
    }
  };
}

export const apiProvider = new ApiProvider();
