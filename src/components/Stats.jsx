import React, { useEffect, useState } from "react";
import "./stats.css";
import InfoBox from "./InfoBox";
import { useSelector } from "react-redux";

function Stats() {
  const countryCode = useSelector(state => state.selectedCountry);
  const [countryData, setCountryData] = useState({});

  //Make api call
  useEffect(() => {
    const url =
      countryCode === "worldwide"
        ? "https://corona.lmao.ninja/v3/covid-19/all"
        : `https://corona.lmao.ninja/v3/covid-19/countries/${countryCode}`;

    const countryData = fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountryData(data);
      });
  }, [countryCode]);

  return (
    <div className="stats">
      <InfoBox
        className="info-boxes"
        title="Coronavirus Cases"
        total={countryData.todayCases}
        cases={countryData.cases}
      />
      <InfoBox
        className="info-boxes"
        title="Recovered"
        total={countryData.todayRecovered}
        cases={countryData.recovered}
      />
      <InfoBox
        className="info-boxes"
        title="Deaths"
        total={countryData.todayDeaths}
        cases={countryData.deaths}
      />
    </div>
  );
}

export default Stats;
