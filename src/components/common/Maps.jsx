import React from "react";
import BingMapsReact from "bingmaps-react";
import useMaps from "../../hooks/useMaps";

const Maps = () => {
  const { apiKey } = useMaps();

  return (
    <BingMapsReact
      bingMapsKey={apiKey}
      height="600px"
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="100%"
      viewOptions={{
        center: { latitude: 42.360081, longitude: -71.058884 },
        mapTypeId: "grayscale",
      }}
    />
  );
};

export default Maps;
