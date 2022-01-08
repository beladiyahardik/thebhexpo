import { combineReducers, applyMiddleware,createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { LoginReducer } from "./reducer/loginReducer";
import { signupReducer } from "./reducer/signupReducer";

const middleware = [thunk];

const rootReducer = combineReducers({
    loggedUser : LoginReducer,
    signupUser: signupReducer
})

const store = createStore(
    rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))

)

export default store