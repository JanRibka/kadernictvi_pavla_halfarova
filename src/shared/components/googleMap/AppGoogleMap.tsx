// import { Map, Marker } from 'google-maps-react';

import { useJsApiLoader } from '@react-google-maps/api';

const AppGoogleMap = () => {
  // Consts
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_API_KEY", // TODO: Api key d8t do souboru
  });

  return (
    <></>
    // <Map google={}>
    //   <Marker ></Marker>
    // </Map>
  );
};

export default AppGoogleMap;
