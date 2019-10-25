import { ADD_RESULT_DATA } from "../constants";

const BASE_DATA = [];

const resultData = (
  state = BASE_DATA,
  { type, id, photographer, photographer_url, original }
) => {
  switch (type) {
    case ADD_RESULT_DATA:
      return [
        ...state,
        {
            id, photographer, photographer_url, original
        }
      ];
    default:
      return state;
  }
};

export default resultData;

