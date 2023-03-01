import axios from "axios";

axios.defaults.baseURL = "https://63ff6fb89f844910297e6322.mockapi.io/contacts/";

export const getAllContscts =  async () => {
    const { data } = await axios.get("/contacts");
    return data;
};

export const addContact = async(data) => {
    const {data: result} = await axios.post("/contacts", data);
    return result;
}

export const delContact = async(id) => {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
}