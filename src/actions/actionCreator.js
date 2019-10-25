import {
    SEARCH_VALUE,
    ADD_RESULT_DATA
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