import axios from "axios";
import Cookies from "js-cookie";

export const hotelBannerAPI = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-banner?type=hotel`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const hotelOffersAPI = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-offers?type=hotels`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const hotelDealsAPI = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-hotelswithdeal`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const hotelTrendingAPI = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-trending-gateway`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const hotelNeatBYAPI = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-shootingrange`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
