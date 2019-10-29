import { BACKGROUND_PHOTO_INFO } from "../constants";

const BASE_DATA = [];

const backgroundPhotoInfo = (
  state = BASE_DATA,
  { type, photographer, photographer_url, original }
) => {
  switch (type) {
    case BACKGROUND_PHOTO_INFO:
      return [
        ...state,
        {
            photographer, photographer_url, original
        }
      ];
    default:
      return state;
  }
};

export default backgroundPhotoInfo;

