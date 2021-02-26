import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./infoBox.css";

function InfoBox({ title, cases, total }) {
  return (
    <Card className="infobox">
      <CardContent>
        <h3 className="infoBox__title" color="textSecondary">
          {title}
        </h3>

        <h2 className="infoBox__today" color="textSecondary">
          {total} <span className="proText">Today </span>
        </h2>
        <h2 className="infoBox__cases">
          {cases} <span className="proText">Total </span>
        </h2>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
