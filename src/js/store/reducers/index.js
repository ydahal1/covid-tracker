import * as actionType from "../actions";
const initialState = {
  covidData: [],
  selectedCountry: "worldwide"
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.addCovidData:
      return { ...state, covidData: action.payload };
    case actionType.setCurrentCountry:
      return { ...state, selectedCountry: action.payload };
    default:
      return state;
  }
}
export default rootReducer;
