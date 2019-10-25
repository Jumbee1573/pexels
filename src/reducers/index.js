import { combineReducers } from "redux";

import search from './search';
import categories from './categories';
import resultData from './resultData';

const rootReducer = combineReducers({ search, categories, resultData });

export default rootReducer;
