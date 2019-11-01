import { ADD_CATEGORIES_DATA, RESET_CATEGORIES_DATA } from "../constants";

const BASE_DATA = {
    photos: [],
    page: 1
};

const categories = (state = BASE_DATA, action) => {
  switch (action.type) {
    case ADD_CATEGORIES_DATA:
      return {
        photos: [...state.photos, ...action.payload.photos],
        page: action.payload.page + 1
      };
    case RESET_CATEGORIES_DATA:
       return BASE_DATA;
    default:
      return state;
  }
};

export default categories;