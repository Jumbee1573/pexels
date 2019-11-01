import { BACKGROUND_PHOTO_INFO } from "../constants";

const BASE_DATA = {
    photos: []
};

const backgroundPhotoInfo = (
  state = BASE_DATA,
  action
) => {
  switch (action.type) {
    case BACKGROUND_PHOTO_INFO:
      return {
        photos: [...state.photos, ...action.payload.photos]
    };
    default:
      return state;
  }
};

export default backgroundPhotoInfo;

