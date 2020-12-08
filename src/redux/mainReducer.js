import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn43183288Reducer from '../features/SignIn43183288/redux/reducers'
import SignUp14183287Reducer from '../features/SignUp14183287/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn43183288: SignIn43183288Reducer,
SignUp14183287: SignUp14183287Reducer,

});