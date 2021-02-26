import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import numeral from "numeral";
import "./map.css";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "./map.css";

//Cases color for map
const casesTypeColors = {
  cases: {
    hex: "#cc1034",
    multiplier: 800
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 1200
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 2000
  }
};

function Map({ center, zoom }) {
  const data = useSelector(state => state.covidData);
  // console.log(data[0].country, " ...DATA ");

  //Circle for map
  const showDataOnMap = (data, casesType = "cases") =>
    data.map(country => (
      <Circle
        key={uuidv4()}
        center={[country.countryInfo.lat, country.countryInfo.long]}
        fillOpacity={0.4}
        color={casesTypeColors[casesType].hex}
        fillColor={casesTypeColors[casesType].hex}
        radius={
          //Function to make circle big or small
          (Math.sqrt(country[casesType]) *
            casesTypeColors[casesType].multiplier) /
          6
        }
      >
        <Popup>
          <div className="info-container">
            <div
              className="info-flag"
              style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
            />
            <div className="info-name">{country.country}</div>
            <div className="info-confirmed">
              Cases : {numeral(country.cases).format("0,0")}
            </div>
            <div className="info-recovered">
              Recovered: {numeral(country.recovered).format("0,0")}{" "}
            </div>
            <div className="info-deaths">
              Deaths: {numeral(country.deaths).format("0,0")}
            </div>
          </div>
        </Popup>
      </Circle>
    ));
  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>contributors'
        />
        {showDataOnMap(data)}
      </MapContainer>
    </div>
  );
}

export default Map;
