import axios from "axios";

const api = axios.create({
    baseURL: "https://connections-api.herokuapp.com"
});

const saveToken = (token) => {
    if(token){
      return api.defaults.headers.authorization = `Bearer ${token}`
    } 
    api.defaults.headers.authorization = "";
}

export const LoginUser = async(data) => {
    const { data: result } = await api.post("/users/login", data);
    saveToken(result.token);
    return result;
};

export const CurrentUser = async(token) => {
    try {
        saveToken(token);
        const { data } = await api.get("/users/current");
        return data;
    } catch (error) {
        throw error;
    }
    
};

export const LogOutUser = async() => {
    const { data } = await api.post("/users/logout");
    saveToken();
    return data;
};

export const SignUpUser = async(data) => {
    const { data: result } = await api.post("/users/signup", data);
    saveToken(result.token);
    return result;
};

export const getAllContscts =  async () => {
        const { data } = await api.get("/contacts");
        return data;
};

export const addContact = async(data, token) => {
        const {data: result} = await api.post("/contacts", data);
        return result;
};

export const delContact = async(id, token) => {
    const { data } = await api.delete(`/contacts/${id}`);
    return data;
};