import axios, { AxiosResponse } from "axios";
import { randomColor } from "./assertion";
import { User } from "./inline-typed";

const APIClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  responseType: "json",
});

function normalizeResponse<T>(response: AxiosResponse<T, any>) {
  if (response.status !== 200) {
    return Promise.reject(response);
  }
  return response.data;
}

async function getApi<T>(endpoint: string): Promise<T> {
  const resposne = await APIClient.get(endpoint);

  return normalizeResponse(resposne);
}

export async function getUsers(){
  const response = await getApi<Array<User>>("users");
  return response.map((c) => {
    return {
      ...c,
      color: randomColor(),
    };
  });
}
