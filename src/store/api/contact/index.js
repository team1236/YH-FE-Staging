import axios from "axios";
import Cookies from "js-cookie";

export const conatctAPI = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}api/v1/add-support`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
