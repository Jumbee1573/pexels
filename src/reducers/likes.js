import { ADD_LIKE, REMOVE_LIKE } from "../constants";
import { load } from "redux-localstorage-simple";

let LIKES = load({ namespace: "softarex" });

if (!LIKES || !LIKES.likes || !LIKES.likes.length) {
    LIKES = {
        likes: []
    };
}

const likes = ( state = LIKES.likes, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return [...state, action.payload.id];
    case REMOVE_LIKE:
       return [...state].filter(id => id !== action.payload.id);
    default:
      return state;
  }
};

export default likes;

