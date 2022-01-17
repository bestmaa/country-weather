import {
  GET_WEATHER_INFO,
  REQUEST_WEATHER_INFO,
  WEATHER_ERROR,
} from "../constants/weatherConst";

export const getWeatherInfo = (state = { wdata: {} }, action) => {
  switch (action.type) {
    case GET_WEATHER_INFO:
      
      return { loading: false, wdata: action.payload };
    case REQUEST_WEATHER_INFO:
      return { loading: true };
    case WEATHER_ERROR:
      return{ loading: true, error: action.payload };
    default:
      return state;
  }
};
