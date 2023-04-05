import axios from "axios";

const URL = "http://localhost:8000";
export const addFormData = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("error with addFormData", error);
  }
};
