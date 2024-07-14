import axios from "axios";
import Cookies from "js-cookie";

export const recentSearchAPI = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-recent-search`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const popularDestination = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-top-destination`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const flightOffer = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-flight-offer`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const flightBanner = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-banner?type=flight`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const flightTestimonial = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-testimonial?type=flight`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const whyYHChoose = async (data) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}api/v1/get-description`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  };
