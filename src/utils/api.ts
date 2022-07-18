import axios, { AxiosResponse } from "axios";

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

export async function getApi<T>(endpoint: string): Promise<T> {
  const resposne = await APIClient.get(endpoint);

  return normalizeResponse(resposne);
}
