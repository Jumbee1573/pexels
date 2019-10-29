import { combineReducers } from "redux";

import search from './search';
import categories from './categories';
import resultData from './resultData';
import backgroundPhotoInfo from './backgroundPhotoInfo';

const rootReducer = combineReducers({ 
    search, 
    categories, 
    resultData, 
    backgroundPhotoInfo
});

export default rootReducer;
