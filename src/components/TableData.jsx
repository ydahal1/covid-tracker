import React from "react";
import "./tableData.css";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { sortData } from "../utils";

function TableData() {
  let data = useSelector(state => state.covidData);

  console.log(data, "  from the table ");
  return (
    <div className="table__container">
      <table className="table">
        <tbody className="table__body">
          {data.map(country => (
            <tr key={uuidv4()}>
              <td>{country.country}</td>
              <td>
                <strong>{country.cases}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableData;
