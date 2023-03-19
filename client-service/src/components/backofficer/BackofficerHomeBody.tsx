import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopHeadBody from "../common/TopHeadBody";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const BackofficerHomeBody: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB_SSkLkLO1u5QGNl_4kUDERkvC1GtKBAI",
  });

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
  }, []);

  return (
    <>
      <TopHeadBody />
      <div className="sm:px-12 px-6 py-8">
        {isLoaded ? (
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={-0.9} onLoad={onLoad}>
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default BackofficerHomeBody;
