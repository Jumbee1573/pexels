import { SEARCH_VALUE } from "../constants";

const BASE_SEARCH = "";

const search = (state = BASE_SEARCH, { type, value }) => {
  switch (type) {
    case SEARCH_VALUE:
      return value;
    default:
      return state;
  }
};

export default search;
