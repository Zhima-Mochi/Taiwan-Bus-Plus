import { getAllBusCityStation } from "../../api/TDX/Bus/BusStation";
import LZString from "lz-string";
import { DEBUG } from "../../constants/debug";
import { useEffect, useState } from "react";
import { getExpireTime } from "./util";


export default function StoreBusStation({ setBusStation }) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const saved_bus_station = JSON.parse(localStorage.getItem("bus_station") && LZString.decompressFromBase64(localStorage.getItem("bus_station")));
        if (!saved_bus_station || !saved_bus_station.data || new Date().getTime() > new Date(saved_bus_station.expire_time)) {
            DEBUG && console.log('restore bus_station');
            getAllBusCityStation()
                .then(res => {
                    setBusStation && setBusStation(res);
                    localStorage.setItem("bus_station", LZString.compressToBase64(JSON.stringify({
                        data: res,
                        expire_time: getExpireTime(24 * 3600 * 1000)
                    })));
                })
                .then(() => {
                    setLoading(false);
                });
        } else {
            DEBUG && console.log('current bus_station size:', localStorage.getItem("bus_station").length / 1024 / 1024, 'MB');
            DEBUG && console.log(`bus_staion expire_time: ${saved_bus_station.expire_time}`);
            setBusStation && setBusStation(saved_bus_station.data);
            setLoading(false);
        }
    }, [setBusStation]);


    return (loading &&
        <div className="bg-white opacity-90 z-50 w-full h-full fixed flex items-center justify-center">
            <p className="text-center">資料更新中…</p>
        </div>
    );

}