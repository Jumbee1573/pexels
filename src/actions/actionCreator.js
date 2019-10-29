import {
    SEARCH_VALUE,
    ADD_RESULT_DATA,
    BACKGROUND_PHOTO_INFO
} from "../constants";
 
export const searching = value => ({
    type: SEARCH_VALUE,
    value
});

export const addResultData = ({ id, photographer, photographer_url, original }) => ({
    type: ADD_RESULT_DATA,
    id, 
    photographer, 
    photographer_url, 
    original
});

export const background_photo_info = ({ photographer, photographer_url, original }) => ({
    type: BACKGROUND_PHOTO_INFO,
    photographer, 
    photographer_url, 
    original
});