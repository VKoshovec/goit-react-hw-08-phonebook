import axios from "axios";

// axios.defaults.baseURL = "https://63ff6fb89f844910297e6322.mockapi.io/contacts/";


const api = axios.create({
    baseURL: "https://connections-api.herokuapp.com"
});

const saveToken = (token) => {
    if(token){
      return api.defaults.headers.authorization = `Bearer ${token}`
    } 
    api.defaults.headers.authorization = "";
}

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const getAllContscts =  async () => {
    // const { data } = await axios.get("/contacts");
    // return data;
};

export const addContact = async(data) => {
    // const {data: result} = await axios.post("/contacts", data);
    // return result;
};

export const delContact = async(id) => {
    // const { data } = await axios.delete(`/contacts/${id}`);
    // return data;
};

export const LoginUser = async(data) => {
    const { data: result } = await api.post("/users/login", data);
    saveToken(result.token);
    return result;
};

export const SignUpUser = async(data) => {
    const { data: result } = await api.post("/users/signup", data);
    saveToken(result.token);
    return result;
}