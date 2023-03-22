import { Box } from "@mui/system";
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { initialEmployeeDetails } from "../../constants";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json";

const Maps = ({ address, width }) => {
  return (
    <Box width={width || "300%"} height="30%">
      <ComposableMap projection="geoAlbers">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#DDD"
                stroke="#FFF"
              />
            ))
          }
        </Geographies>
        <Marker
          coordinates={(address || initialEmployeeDetails.address)?.split(",")}
        >
          <circle r={8} fill="#F53" />
        </Marker>
      </ComposableMap>
    </Box>
  );
};

export default Maps;
