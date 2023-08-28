import { FETCH_IMAGES_SUCCESS } from "./types";

const initialState = {
  images: [],
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.payload,
      };
    default:
      return state;
  }
};

export default imageReducer;
