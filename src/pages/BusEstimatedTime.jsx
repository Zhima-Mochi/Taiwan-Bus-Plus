import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getBusRouteEstimatedArrival } from "../api/TDX/Bus/EstimatedTimeOfArrival";
import { BusRouteContext } from "../App";
import BusEstimatedTimeList from "../components/EstimationOfArrivalTime/BusEstimatedTimeList";
import { DEBUG } from "../constants/debug";


import west_24dp from '../assets/icons/west_24dp.svg';
import { useHistory } from 'react-router'
import LikedBusRoute from "../components/LocalStorage/LikedBusRoute";



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
    let history = useHistory();

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
            <div className="bg-white view-border pt-4 flex pl-1" onClick={() => history.goBack()} style={{ cursor: "pointer" }}>
                <img src={west_24dp} alt='回上一頁 back to previous page' />
                <span className="ml-2">返回搜尋</span>
            </div>
            {RouteData && <BusEstimatedTimeRouteName RouteData={RouteData} />}
            <div className="bg-white tracking-widest sticky top-0 z-10">
                <div className=" text-right lg:text-center py-1">{updateTime}秒後更新</div>
            </div>
            <div className="view-border lg:pb-10 h-full flex flex-col">
                {busEstimatedData ? <BusEstimatedTimeList estimateData={busEstimatedData} RouteData={RouteData} /> : <p className="w-1/2">出問題了！請重新再試一次。</p>}
            </div>
        </div>
    );
}