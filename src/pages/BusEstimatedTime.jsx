import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getBusRouteEstimatedArrival } from "../api/TDX/Bus/EstimatedTimeOfArrival";
import { BusRouteContext } from "../App";
import BusEstimatedTimeList from "../components/EstimationOfArrivalTime/BusEstimatedTimeList";
import { DEBUG } from "../constants/debug";


import LikedBusRoute from "../components/LocalStorage/LikedBusRoute";
import BackPage from "../components/Utils/BackPage";



function BusEstimatedTimeRouteName({ RouteData }) {

    return (
        <>
            <div className="bg-white flex justify-center items-center h-16 px-4">
                <span className="ml-10">&nbsp;</span>
                <div className="bus-estimated-time-routename">
                    {RouteData.RouteName.Zh_tw}
                </div>
                <div>
                    <LikedBusRoute RouteUID={RouteData.RouteUID} />
                </div>
            </div>
        </>
    );
}


export default function BusEstimatedTime() {
    const busRoute = useContext(BusRouteContext);
    const RouteUID = useParams()['RouteUID'];
    const RouteData = busRoute.find(route => route.RouteUID === RouteUID);
    const [busEstimatedData, setBusEstimatedData] = useState([]);
    const [updateTime, setUpdateTime] = useState(0);

    // tick
    const tick = useCallback(() => {
        if (updateTime > 0) {
            setUpdateTime(updateTime - 1);
        }
    }, [updateTime]);

    useEffect(() => {
        let periodic_action = setInterval(tick, 1000);
        return () => {
            clearInterval(periodic_action);
        }
    }, [tick]);

    // Update bus estimated arrival time data
    useEffect(() => {
        if (updateTime === 0 && RouteData) {
            DEBUG && console.log('fetch bus estimated arrival time data');
            getBusRouteEstimatedArrival(RouteData.City, RouteData.RouteUID)
                .then(res => {
                    setBusEstimatedData(res);
                })
                .then(
                    () => setUpdateTime(10)
                )
                .then(() => {
                    DEBUG && console.log('Bus estimated arrival time data', busEstimatedData);
                })
        }
    }, [updateTime, RouteData, busEstimatedData]);

    return (
        <div className="h-full flex flex-col">
            <BackPage />
            {RouteData && <BusEstimatedTimeRouteName RouteData={RouteData} />}
            <div className="bg-white tracking-widest sticky top-0 z-20">
                <div className=" text-right lg:text-center py-1">{updateTime}秒後更新</div>
            </div>
            <div className="view-border lg:pb-10 h-full flex flex-col">
                {busEstimatedData ? <BusEstimatedTimeList estimateData={busEstimatedData} RouteData={RouteData} /> : <div className="flex justify-center items-center my-10"><p >出問題了！請回到上一頁重整並再試一次。</p></div>}
            </div>
        </div>
    );
}