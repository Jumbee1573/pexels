import { ADD_LIKE, REMOVE_LIKE } from "../constants";

const LIKES = [];
const savedLikes = JSON.parse(localStorage.getItem("likes"));

const likes = ( state = LIKES, action) => {
  switch (action.type) {
    case ADD_LIKE:
        localStorage.setItem('likes', JSON.stringify([...savedLikes, action.payload.id]));
        return [...state, action.payload.id];
    case REMOVE_LIKE:
        
        localStorage.setItem('likes', JSON.stringify([...savedLikes].filter(id => id !== action.payload.id)));
        return [...state].filter(id => id !== action.payload.id);
    default:
      return state;
  }
};

export default likes;

