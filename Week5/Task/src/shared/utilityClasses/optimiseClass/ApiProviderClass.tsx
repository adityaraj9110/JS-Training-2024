/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosResponse } from "axios";

export interface APIResponse<T> {
  code: number;
  status: string[];
  message: string[];
  data: T;
}

export default class ApiProviderClass {
  private baseURL = "https://dummyjson.com/products";

  private async makeRequest<T>(
    method: "get" | "post" | "put" | "patch" | "delete",
    endpoint: string | number,
    data?: T,
    header?: Record<string, any>
  ): Promise<APIResponse<T>> {
    try {
      const response: AxiosResponse<APIResponse<T>> = await axios({
        method,
        url: `${this.baseURL}${endpoint}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: (header?.["Content-Type"] == "multipart/form-data"
          ? data
          : JSON.stringify(data)) as T,
        timeout: 3000,
      });

      return response;
    } catch (error: any) {
      if (typeof error === "string") {
        throw new Error(error);
      } else if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Unknown error occurred");
      }
    }
  }

  protected async get<T>(
    endpoint: string | number,
    header?: Record<string, string>
  ): Promise<APIResponse<T>> {
    return this.makeRequest("get", endpoint);
  }

  protected async post<T>(
    endpoint: string | number,
    data?: T,
    header?: Record<string, any>
  ): Promise<APIResponse<T>> {
    return this.makeRequest("post", endpoint, data, header);
  }

  protected async delete<T>(
    endpoint: string,
    data?: T
  ): Promise<APIResponse<T>> {
    return this.makeRequest("delete", endpoint, data);
  }

  protected async put<T>(
    endpoint: string,
    data?: any,
    header?: Record<string, any>
  ): Promise<APIResponse<T>> {
    return this.makeRequest("put", endpoint, data, header);
  }

  protected async patch<T>(
    endpoint: string,
    data?: any
  ): Promise<APIResponse<T>> {
    return this.makeRequest("patch", endpoint, data);
  }
}
