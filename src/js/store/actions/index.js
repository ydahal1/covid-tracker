import * as actionType from "../constants/action-types";

export const addCovidData = payload => {
  return {
    type: actionType.ADD_COVID_DATA,
    payload
  };
};

export const setCurrentCountry = payload => {
  return {
    type: actionType.SET_CURRENT_COUNTRY,
    payload
  };
};
