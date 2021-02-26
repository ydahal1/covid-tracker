//Local files
import "./header.css";
import { useDispatch } from "react-redux";
//NPM
import { useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import * as actionType from "../js/store/actions";
import logo from "../../src/logo.png";
import { substr } from "../utils";
function Header() {
  //Initialize use dispatch
  const dispatch = useDispatch();

  //Local states
  const [selectedCountry, setSelectedCountry] = useState("");

  // useSelector and useDispatch
  const data = useSelector(state => state.covidData);

  //on change
  const handleOnChange = e => {
    setSelectedCountry(e.target.value);
    dispatch({
      type: actionType.setCurrentCountry,
      payload: e.target.selectedOptions[0].dataset.name
    });
  };
  return (
    <div className="header">
      <img src={logo} className="logo"></img>
      <h1>COVID-19 TRACKER</h1>
      <div className="header__countrySelect">
        <select
          className="header__dropdown"
          onChange={handleOnChange}
          value={selectedCountry}
        >
          <option value="worldwide" data-name="worldwide">
            Worldwide
          </option>
          {data?.map(data => (
            <option key={uuidv4()} data-name={data.countryInfo.iso3}>
              {/* {data.country} */}
              {console.log("apple")}
              {substr(data.country)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Header;
