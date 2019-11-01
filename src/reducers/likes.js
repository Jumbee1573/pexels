import { ADD_LIKE, REMOVE_LIKE } from "../constants";

const BASE_DATA = {
    likes: []
};

const likes = ( state = BASE_DATA, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return {
        likes: [...state.likes, action.payload.likes]
      };
    case REMOVE_LIKE:
       return {
         likes: [...state.likes].filter(id => id !== action.payload.id)
       }
    default:
      return state;
  }
};

export default likes;

