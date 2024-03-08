import { ApiResponseType, DataType } from "../DataTypes/ResponsedataType";

class ApiService {
  private cacheData = new Map<string, any>();

  protected async getAllData<TData extends ApiResponseType<DataType>>(
    url: string,
    skip: number,
    offset: number
  ): Promise<TData> {
    try {
      const cacheKey = `${offset}_${skip}_${url}`;
      if (this.cacheData.has(cacheKey)) {
        return this.cacheData.get(cacheKey);
      } else {
        const data = await (
          await fetch(`${url}?limit=${offset}&skip=${skip}`)
        ).json();
        this.cacheData.set(cacheKey, data);
        return data;
      }
    } catch (error: any) {
      return error.message;
    }
  }


  // write all methods, get, put, post, delete
  protected async getProductByID<TData extends DataType>(
    url: string,
    id: string
  ): Promise<TData> {
    try {
      const data = await (await fetch(`${url}/${id}`)).json();
      return data;
    } catch (error: any) {
      return error.message;
    }
  }

  protected async getAllDataByIds(
    url: string,
    ids: string[]
  ): Promise<DataType[]> {
    try {
      if (ids) {
        const data = await Promise.all(
          ids.map((id) => {
            const data = this.getProductByID(url, id);
            return data;
          })
        );

        return data;
      } else {
        return [];
      }
    } catch (error: any) {
      return error.message;
    }
  }
}

export default ApiService;
