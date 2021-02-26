import { useEffect, useState } from "react";

//Local files
import "./App.css";
import Header from "./components/Header";
import store from "./js/store";
import * as actionTypes from "./js/store/actions";
import Stats from "./components/Stats";
import Map from "./components/Map";
import TableData from "./components/TableData";
import LineGraph from "./components/LineGraph";
import "leaflet/dist/leaflet.css";
import { sortData } from "./utils";

function App() {
  //Local States
  const [mapCenter, setMapCenter] = useState({ lat: 40.7128, lng: 74.006 });
  const [mapZoom, setMapZoom] = useState(3);
  useEffect(() => {
    //Get countries function defined
    const getCountriesData = async () => {
      await fetch("https://corona.lmao.ninja/v3/covid-19/countries")
        .then(response => response.json())
        .then(data => {
          // const countries = data.map(country => ({
          //   name: country.country,
          //   value: country.countryInfo.iso2
          // }));
          //Setting countries
          let sortedData = data;
          sortedData = sortData(data);
          store.dispatch({
            type: actionTypes.addCovidData,
            payload: sortedData
          });
        });
    };

    //Calling get countries function
    getCountriesData();
  }, []);

  return (
    <div className="app">
      <div className="app__left">
        <Header />
        <Stats />
        <Map center={mapCenter} zoom={mapZoom} />
      </div>
      <div className="app__right">
        <h3> Cases by Countries</h3>
        <TableData />
        <h3> Worldwide new cases</h3>
        <LineGraph />
      </div>
    </div>
  );
}

export default App;

//Material UI
//uuid
//Disease.sh API
//react-leaflet
// Chart.js
//numeral
//fetch

// to do  >>>>
//Sort the table
