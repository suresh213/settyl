import React from "react";
import L from "leaflet";

const style = {
  width: "100%",
  height: "100%",
};

class Maps extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map("map", {
      center: this.props.address?.split(","),
      zoom: 14,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });

    this.map.on("click", (e) => {
      this?.updateEmployee(`${e.latlng.lat},${e.latlng.lng}`);
    });

    // add layer
    this.layer = L.layerGroup().addTo(this.map);
    this.updateMarkers(this.props.address);
  }
  componentDidUpdate({ address }) {
    // check if data has changed
    if (this.props.address !== address) {
      this.updateMarkers(this.props.address);
    }
  }
  updateMarkers(address) {
    this.layer.clearLayers();
    const [lat, lng] = address?.split(",");
    L.marker({ lat, lng }, { title: "Location" }).addTo(this.layer);
  }
  updateEmployee(address) {
    if (this?.props?.setEmployee) {
      this?.props?.setEmployee({
        ...this?.props?.employee,
        address,
      });
    }
  }
  render() {
    return <div id="map" style={style} />;
  }
}

export default Maps;
