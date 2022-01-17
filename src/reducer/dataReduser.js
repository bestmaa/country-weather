import {
  ERROR_REQUEST_DATA,
  GET_COUNTRY_DATA_LOAD,
  GET_REQUEST_COUNTRY_DATA,
} from "../constants/DataConst";

export const getCountryLoadData = (state = { data: {} }, action) => {
  switch (action.type) {
    case GET_COUNTRY_DATA_LOAD:
      return { loading: false, data: action.payload };
    case GET_REQUEST_COUNTRY_DATA:
      return {loading: true ,  data: {}};
    case ERROR_REQUEST_DATA:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
