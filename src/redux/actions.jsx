import axios from "axios"; // You might need axios or another HTTP library

import { FETCH_IMAGES_SUCCESS } from "./types"; // Define your action types in types.js

// Replace 'YOUR_PEXELS_API_KEY' with your actual Pexels API key
const API_KEY = "MQ7ioxzXpuAop9zjpoaIK3zmFnrI5BF0ZuuQXeKSrXJg1jfLRfm9mBRe";
const BASE_URL = `https://api.pexels.com/v1`;

export const fetchImages = (query) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      headers: {
        Authorization: API_KEY,
      },
      params: {
        query,
        per_page: 50, // Adjust the number of images per page as needed
      },
    });

    dispatch({
      type: FETCH_IMAGES_SUCCESS,
      payload: response.data.photos,
    });
  } catch (error) {
    console.error("Error fetching images:", error);
  }
};
