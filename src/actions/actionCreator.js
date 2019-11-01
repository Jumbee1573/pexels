import {
    SEARCH_VALUE,
    ADD_RESULT_DATA,
    BACKGROUND_PHOTO_INFO,
    ADD_CATEGORIES_DATA,
    RESET_CATEGORIES_DATA,
    ADD_LIKE,
    REMOVE_LIKE
} from "../constants";
 
export const searching = value => ({
    type: SEARCH_VALUE,
    value
});

export const addResultData = (photos, page) => ({
    type: ADD_RESULT_DATA,
    payload: { photos, page }
});

export const addCategoriesData = (photos, page) => ({
    type: ADD_CATEGORIES_DATA,
    payload: { photos, page }
});

export const background_photo_info = photos => ({
    type: BACKGROUND_PHOTO_INFO,
    payload: { photos }
});

export const resetCategoriesData = () => ({
    type: RESET_CATEGORIES_DATA
});

export const addLike = id => ({
    type: ADD_LIKE,
    payload: { id }
});

export const removeLike = id => ({
    type: REMOVE_LIKE,
    payload: { id }
});