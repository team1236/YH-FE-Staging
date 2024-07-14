import axios from "axios";
import Cookies from "js-cookie";

export const myServiceAPI = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-myservice`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
