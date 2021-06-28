import React, { useState } from "react";
import ReactMapGL from 'react-map-gl';
import './App.css'

function App() {

  let [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
    width: window.innerWidth,
    height: window.innerHeight
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxApiAccessToken={
        "pk.eyJ1IjoiZGV2aW5kYXZpcyIsImEiOiJja3Fmd3k4dTkwdnU3MnFsbmQwNjlkMHliIn0.XYClM9yG70FWHSHyM0Rfjw"
      }
      {...viewport} onViewportChange={(newView) => setViewport(newView)}
    />
  );
}

export default App;
