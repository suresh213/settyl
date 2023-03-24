import React, { useEffect } from "react";
import L from "leaflet";

const style = {
  width: "100%",
  height: "100%",
};

let map = null;
let layer = null;

const Maps = ({ address, employee, setEmployee }) => {
  useEffect(() => {
    // create map
    map = L.map("map", {
      center: address?.split(","),
      zoom: 14,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });

    map.on("click", (e) => {
      if (setEmployee) {
        updateEmployee(`${e.latlng.lat},${e.latlng.lng}`);
      }
    });

    // add layer
    layer = L.layerGroup().addTo(map);

    updateMarkers(address);
  }, []);

  useEffect(() => {
    if (!employee) return;

    updateMarkers(employee.address);
  }, [employee]);

  const updateMarkers = (address) => {
    layer.clearLayers();
    const [lat, lng] = address?.split(",");
    L.marker({ lat, lng }, { title: "Location" }).addTo(layer);
  };

  const updateEmployee = (address) => {
    setEmployee((employee) => ({ ...employee, address: address }));
  };

  return <div id="map" style={style} />;
};

export default Maps;
