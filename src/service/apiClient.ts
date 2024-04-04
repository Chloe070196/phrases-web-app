import {
  NewUserPhraseType,
  PhraseType,
  TextType,
  UserPhraseType,
  UserType,
} from "../types";
const rootUrl = import.meta.env.VITE_API_URL;

const request = async (
  endpoint: string,
  method: string,
  auth: boolean,
  data: object | null = null
): Promise<Response> => {
  const url = rootUrl + endpoint;
  const jwt = localStorage.getItem('jwt')

  const headers = new Headers()
  headers.set("Content-Type", "application/json");
  const options: RequestInit = {
    method: method,
    headers,
  };
  if (data) {
    options.body = JSON.stringify(data);
  }
  if (auth && headers) {
    headers.set('Authorization', `Bearer ${jwt}`);
    options.credentials = "include";
  }
  
  const response =  await fetch(url, options);
  return response
};

const get = async (endpoint: string, auth = false): Promise<Response> => {
  const method = "GET";
  return await request(endpoint, method, auth);
};

const post = async (endpoint: string, auth = false, data: object, ): Promise<Response> => {
  const method = "POST";
  return await request(endpoint, method, auth, data);
};

const registerNewUser = async (data: object): Promise<Response> => {
  const response = await post("/register/", false, data);
  const responseData = await response.json();
  return responseData;
};

const logIn = async (data: object): Promise<UserType> => {
  const response = await post("/login/", false, data);
  return await response.json();
};

const getAllCategories = async () => {
  const response =  await get("/phrases/categories/", false) 
  return await response.json()
}

const getPhrases = async (
  phrasesNum?: number | null
  ): Promise<Array<PhraseType>> => {
    if (phrasesNum) {
      const response = await get(`/phrases/?phrases_num=${phrasesNum}`, true);
    return await response.json();
  }
  const response = await get("/phrases/", true);
  return await response.json();
};

const getUserPhrases = async (
  userId: number
): Promise<Array<UserPhraseType>> => {
  const response = await get(`/userphrases/${userId}/`, true);
  return await response.json();
};

const getUserPhrasesByCategory = async (
  userId: number,
  category: string
): Promise<Array<UserPhraseType>> => {
  const response = await get(`/userphrases/${userId}/?category=${category}`, true);
  return await response.json();
};

const postUserPhrase = async (
  newUserPhrase: NewUserPhraseType
): Promise<UserPhraseType> => {
  const response = await post("/userphrases/", true, newUserPhrase);
  return await response.json();
};

const postText = async (
  text: TextType  
): Promise<TextType> => {
  const response = await post("/texts/", true, text);
  return await response.json();
};
export { registerNewUser, logIn, getPhrases, postUserPhrase, getUserPhrases, getAllCategories, getUserPhrasesByCategory, postText };
