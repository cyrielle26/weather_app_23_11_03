import { useEffect, useState } from "react";

export const useCurrentWeather = () => {
    const defaultLat = 35.158049371114956;
    const defaultLon = 129.05986219337697;


    const [lat, setLat] = useState(defaultLat);

    const [lon, setLon] = useState(defaultLon);


    const location = (pos) => {
        console.log(pos);

        const {
            coords: { latitude, longitude }
        } = pos;

        setLat(latitude);
        setLon(longitude);

    };




    useEffect(() => {
        navigator.geolocation.getCurrentPosition(location);
        /* =>current location longitude/latitude value get*/

    }, [lat, lon])
    /*  */
    return {
        lat,
        lon,

    };
};