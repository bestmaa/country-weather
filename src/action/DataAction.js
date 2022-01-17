import {
  ERROR_REQUEST_DATA,
  GET_COUNTRY_DATA_LOAD,
  GET_REQUEST_COUNTRY_DATA,
} from "../constants/DataConst";

export const getCountryData = (name) => async (dispatch) => {
  try {
    dispatch({ type: GET_REQUEST_COUNTRY_DATA });
    let data = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    let jsonData = await data.json();
    dispatch({ type: GET_COUNTRY_DATA_LOAD, payload: jsonData });
  } catch (error) {
    dispatch({ type: ERROR_REQUEST_DATA, payload: error });
  }
};
