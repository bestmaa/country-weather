import axios from "axios";
import {
  GET_WEATHER_INFO,
  REQUEST_WEATHER_INFO,
  WEATHER_ERROR,
} from "../constants/weatherConst";

export const getWeatherInfo = (name) => async (dispatch) => {
  dispatch({ type: REQUEST_WEATHER_INFO });

  // let data=await axios.get(`http://api.weatherstack.com/current?access_key=39b8f25c1b59631ad4ce6becc965142f&query=${name}`)
  await axios
    .get(
      `http://api.weatherstack.com/current?access_key=39b8f25c1b59631ad4ce6becc965142f&query=${name}`
    )
    .then((data) => {
      if (data.data.error) {
        throw data.data.error;
      } else {
        dispatch({ type: GET_WEATHER_INFO, payload: data.data });
       
      }
    })
    .catch((err) => {
      dispatch({ type: WEATHER_ERROR, payload: err.info });
      
    });
};
