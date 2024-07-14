import axios from "axios";
import Cookies from "js-cookie";

export const transportBannerAPI = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-banner?type=transport`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const transportOffersAPI = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-offers?type=transports`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const transportServiceAPI = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-transportService`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
