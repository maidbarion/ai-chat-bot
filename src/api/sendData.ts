import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const sendData = async (inputMessage: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/sendData`, {
      inputMessage,
    });
    return response.data.response;
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  }
};
