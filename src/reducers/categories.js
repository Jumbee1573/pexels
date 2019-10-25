import { ADD_CATEGORIES } from "../constants";

const BASE_CATEGORIES = "";

const categories = (state = BASE_CATEGORIES, { type, value }) => {
  switch (type) {
    case ADD_CATEGORIES:
      return value;
    default:
      return state;
  }
};

export default categories;
