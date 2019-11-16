import { combineReducers } from 'redux';
import inputReducer from './inputsReducer';
import valuesReducer from './valuesReducer';
import collectionReducer from './collectionReducer';

const rootReducer = combineReducers({
  inputs: inputReducer,
  values: valuesReducer,
  expenses: collectionReducer,
});

export default rootReducer;
