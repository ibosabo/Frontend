import { applyMiddleware,combineReducers,createStore } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import authReducer from './reducers/auth';
import anketReducer from "./reducers/anket";
import anketPostReducer from "./reducers/anketpost";
const initialState = {

}//Redux store için birden fazla reducer'ı birleştirir.
const reducers = combineReducers({
   auth: authReducer,
  anket: anketReducer,
  anketpost: anketPostReducer
})

const store = createStore(reducers, initialState, 
    composeWithDevTools(applyMiddleware(thunk)))

    export default store;