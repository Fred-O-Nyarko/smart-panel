import {combineReducers} from 'redux';
import themeReducer from './theme_reducer';

export default combineReducers ({
  theme: themeReducer,
});
