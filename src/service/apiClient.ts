import { PhraseType, UserType } from "../types";

const rootUrl = import.meta.env.VITE_API_URL;

const request = async (
  endpoint: string,
  method: string,
  data: object | null = null
): Promise<Response> => {
  const url = rootUrl + endpoint;
  const options: RequestInit = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (data) {
    options.body = JSON.stringify(data);
  }

  return await fetch(url, options);
};

const get = async (endpoint: string): Promise<Response> => {
  const method = "GET";
  return await request(endpoint, method);
};

const post = async (endpoint: string, data: object): Promise<Response> => {
  const method = "POST";
  return await request(endpoint, method, data);
};

const registerNewUser = async (data: object): Promise<Response> => {
  const response = await post("/register", data);
  const responseData = await response.json();
  return responseData;
};

const logIn = async (
  data: object
): Promise<UserType> => {
  const response = await post("/login", data);
  return await response.json();
};

const getPhrases = async (phrasesNum: number | null): Promise<Array<PhraseType>> => {
  if (phrasesNum) {
      const response = await get(`/phrases?phrases_num=${phrasesNum}`)
      return await response.json()
    }
    const response = await get("/phrases");
    return await response.json();
};

export { registerNewUser, logIn, getPhrases};
