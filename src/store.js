import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getCountryLoadData } from "./reducer/dataReduser";
import { getWeatherInfo } from "./reducer/weatherInfo";


const reducer = combineReducers({
  CountryData:getCountryLoadData,
  weather:getWeatherInfo
});


const middleware = [thunk];
export const initState = {};

const store = createStore(
  reducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
