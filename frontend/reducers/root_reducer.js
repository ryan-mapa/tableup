import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import RestaurantReducer from './restaurant_reducer';
import entitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';


export default combineReducers({
  session: SessionReducer,
  errors: errorsReducer,
  entities: entitiesReducer,
  ui: uiReducer
});
