import axios from "axios";
import Cookies from "js-cookie";

export const myTripAPI = async (data) => {
  try {
    const response = await axios.get(
      `${
        import.meta.env.VITE_APP_API_URL
      }api/v1/get-mytrip?email=${localStorage.getItem("yh_user_email")}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
