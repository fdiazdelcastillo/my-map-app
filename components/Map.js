import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
require("dotenv").config();

const Map = ({ address }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    loader.load().then(() => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK") {
          const map = new google.maps.Map(mapRef.current, {
            center: results[0].geometry.location,
            zoom: 8,
          });
          new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
          });
        } else {
          console.error(
            "Geocode was not successful for the following reason:",
            status
          );
        }
      });
    });
  }, [process.env.GOOGLE_MAPS_API_KEY, address]);

  return <div style={{ height: "400px", width: "100%" }} ref={mapRef} />;
};

export default Map;
