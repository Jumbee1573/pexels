import { ADD_RESULT_DATA } from "../constants";

const BASE_DATA = {
    photos: [],
    page: 6
};

const resultData = ( state = BASE_DATA, action) => {
  switch (action.type) {
    case ADD_RESULT_DATA:
      return {
        photos: [...state.photos, ...action.payload.photos],
        page: action.payload.page + 1
      };
    default:
      return state;
  }
};

export default resultData;

