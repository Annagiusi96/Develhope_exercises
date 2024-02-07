import { useState } from "react";

export function useCurrentLocation(){
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    function success(position) {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      }
      
      function error() {
        console.log("Sorry, no position available.");
      }
      
      const options = {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
      };
      
      const watchID = navigator.geolocation.watchPosition(success, error, options);

      return [latitude, longitude]
}