import LZString from "lz-string";
import { DEBUG } from "../../constants/debug";
import { useEffect } from "react";
import { getAllBusCityRoute } from "../../api/TDX/Bus/BusRoute";
import { getExpireTime } from "./util";



export default function StoreBusRoute({ setBusRoute }) {
    useEffect(() => {
        const saved_bus_route = JSON.parse(localStorage.getItem("bus_route") && LZString.decompressFromBase64(localStorage.getItem("bus_route")));
        if (!saved_bus_route || !saved_bus_route.data || new Date().getTime() > new Date(saved_bus_route.expire_time)) {
            DEBUG && console.log('restore bus_route');
            getAllBusCityRoute()
                .then(res => {
                    setBusRoute && setBusRoute(res);
                    localStorage.setItem("bus_route", LZString.compressToBase64(JSON.stringify({
                        data: res,
                        expire_time: getExpireTime(24 * 3600 * 1000)
                    })));
                })
        } else {
            DEBUG && console.log('current bus_route size:', localStorage.getItem("bus_route").length / 1024 / 1024, 'MB');
            DEBUG && console.log(`bus_staion expire_time: ${saved_bus_route.expire_time}`);
            setBusRoute && setBusRoute(saved_bus_route.data);
        }
    }, [setBusRoute]);


    return null;
}