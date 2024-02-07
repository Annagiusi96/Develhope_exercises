import { useCurrentLocation } from "./useCurrentLocation"

export function GetCurrentPosition(){
   const [latitude, longitude] = useCurrentLocation()
    return (
        <>
            <h2>Latitude: {latitude}</h2>
            <h2>Longitude: {longitude}</h2>
        </>
    )
}