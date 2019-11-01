import { combineReducers } from "redux";

import search from './search';
import categories from './categories';
import resultData from './resultData';
import backgroundPhotoInfo from './backgroundPhotoInfo';
import likes from './likes';

const rootReducer = combineReducers({ 
    search, 
    categories, 
    resultData, 
    backgroundPhotoInfo,
    likes
});

export default rootReducer;
