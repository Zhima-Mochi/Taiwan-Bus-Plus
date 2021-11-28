import { useEffect, useState } from "react";
import { DEBUG } from "../../constants/debug";

function getLocation(setUserLocation, prevLocation, setPrevLocation) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                if (needUpdate(prevLocation, position.coords)) {
                    setUserLocation(position.coords);
                    setPrevLocation(position.coords);
                } else {
                    DEBUG && console.log("UserLocation: Do not need update.")
                }
            },
            function (e) {
                const msg = e.code;
                const dd = e.message;
                console.error(msg)
                console.error(dd)
            }
        )
    }
}

// update when distance is over 5m.
function needUpdate(prevLocation, currentLocation) {
    const x = (currentLocation.longitude - prevLocation.longitude) * 100000;
    const y = (currentLocation.latitude - prevLocation.latitude) * 100000;
    return Math.pow(x, 2) + Math.pow(y, 2) > 25;
}

export default function PosUserLocation({ setUserLocation, period = 30 }) {
    const [prevLocation, setPrevLocation] = useState({ longitude: 0, latitude: 0 });
    useEffect(() => {
        getLocation(setUserLocation, prevLocation, setPrevLocation);
        let periodic_action = setInterval(() => {
            getLocation(setUserLocation, prevLocation, setPrevLocation);
        }, period * 1000);
        return () => {
            clearInterval(periodic_action);
        };
    }, [setUserLocation, period, prevLocation]);
    return null;
}