import React, { useCallback, useState } from 'react';
import { GoogleMapsCenterType } from 'shared/types/GoogleMapsCenterType';

import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

interface IProps {
  center: GoogleMapsCenterType;
  zoom: number;
}

const AppGoogleMaps = (props: IProps) => {
  // State
  const [, setMap] = useState<google.maps.Map | null>(null);

  // Other
  const { isLoaded } = useLoadScript({
    // id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(props.center);

    map.fitBounds(bounds);
    setMap(map);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUnmount = useCallback((map: google.maps.Map) => {
    setMap(null);
  }, []);

  return (
    <>
      {(() => {
        if (isLoaded) {
          return (
            <GoogleMap
              center={props.center}
              zoom={props.zoom}
              onLoad={onLoad}
              onUnmount={onUnmount}
              mapContainerStyle={{ width: "100%", height: "100%" }}
              mapContainerClassName='google-map-container'
            >
              <Marker
                // title='Slezská 104/57, Dům, 747 27 Kobeřice, Česko'
                position={{ lat: 49.98365749106722, lng: 18.04994885705438 }}
              />
            </GoogleMap>
          );
        } else {
          <></>;
        }
      })()}
    </>
  );
};

export default React.memo(AppGoogleMaps);
