import { useContext, useEffect, useState } from "react";
import { getStopsOfRoute } from "../../api/TDX/Bus/BusStop";
import { UserLocationContext } from "../../App";
import BusRouteMap from "../Map/BusRouteMap";
import map from '../../assets/icons/map.svg';

const StopStatus = {
    0: '正常',
    1: '未發車',
    2: '不停靠',
    3: '末班已過',
    4: '今未營運'
}

function getEstimatedTimeStr(data) {
    if (data.StopStatus > 1) {
        return StopStatus[data.StopStatus];
    } else if (data.StopStatus === 0 || data.EstimateTime) {
        const minutes = Math.floor((data.EstimateTime - 10) / 60); // adjust 10 seconds
        if (minutes > 1) {
            return minutes + ' 分';
        } else if (minutes === 1) {
            return "即將進站";
        } else {
            return "進站中";
        }
    } else if (data.NextBusTime) {
        const time = new Date(data.NextBusTime);
        const h = '0' + time.getHours();
        const m = '0' + time.getMinutes();
        return h.slice(h.length - 2) + ':' + m.slice(m.length - 2);
    } else {
        return StopStatus[1];
    }
}


function getComingStatus(data) {
    // 0 normal, 1 coming, 2 gray 
    if (data.StopStatus > 1) {
        return 2;
    } else if (data.StopStatus === 0 || data.EstimateTime) {
        const minutes = Math.ceil(data.EstimateTime / 60);
        if (minutes <= 2) {
            return 1;
        } else {
            return 0;
        }
    } else {
        return 2;
    }
}

function EstimatedTimeItem({ data, pinStop, direction, setMapStop }) {
    const coming_status = getComingStatus(data);
    const [isNear, setIsNear] = useState(false);
    useEffect(() => {
        let child = document.getElementById(data.StopUID);
        let parent = document.getElementById('timeList');
        if (pinStop[direction] === data.StopUID) {
            if (child) {
                parent.scrollTop = child.offsetTop - child.clientHeight * 2;
                setIsNear(true);
            }
        } else {
            setIsNear(false);
        }
    }, [pinStop, direction]);
    return (
        <div id={data.StopUID} onClick={() => { setMapStop(data.StopUID) }} className={"flex items-center arrival-time-item " + (isNear ? "bg-blue-300 " : "") + (coming_status === 1 && "bg-gray-100")} style={{ cursor: "pointer" }}>
            <div className={"flex justify-center items-center arrival-time-estimated-time " + (coming_status === 1 ? "comming" : coming_status === 2 ? "gray" : "")}>
                <div>{getEstimatedTimeStr(data)}</div>
            </div>
            <div className=" ml-8 arrival-time-stop-name flex justify-between">
                {data.StopName.Zh_tw}
            </div>
        </div>
    )
}


// unit: meter
function getDistance(stop, center) {
    const x = (stop.StopPosition.PositionLon - center.longitude) * 100000;
    const y = (stop.StopPosition.PositionLat - center.latitude) * 100000;
    return Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 0.5);
}

export default function BusEstimatedTimeList({ estimateData, RouteData }) {
    const [direction, setDirection] = useState(0);
    const [pinStop, setPinStop] = useState({});
    const [mapStop, setMapStop] = useState("");
    const userLocation = useContext(UserLocationContext);
    const [stopsOfRoute, setStopsOfRoute] = useState([]);
    const [hideMap, setHideMap] = useState(true);

    useEffect(() => {
        if (RouteData) {
            getStopsOfRoute(RouteData.City, RouteData.RouteUID).then(res => setStopsOfRoute(res));
        }
    }, [RouteData])

    useEffect(() => {
        const distance_bound = 500;
        let res = {};
        let distance = 10000;
        let nearest_stop = "";

        stopsOfRoute[0] && stopsOfRoute[0][0] && stopsOfRoute[0][0].Stops.forEach(stop => {
            const d = getDistance(stop, userLocation);
            if (d < distance && d < distance_bound) {
                distance = d;
                nearest_stop = stop.StopUID;
            }
        });
        res[0] = nearest_stop;

        distance = 10000;
        nearest_stop = "";
        stopsOfRoute[1] && stopsOfRoute[1][0] && stopsOfRoute[1][0].Stops.forEach(stop => {
            const d = getDistance(stop, userLocation);
            if (d < distance && d < distance_bound) {
                distance = d;
                nearest_stop = stop.StopUID;
            }
        });
        res[1] = nearest_stop;

        distance = 10000;
        nearest_stop = "";
        stopsOfRoute[2] && stopsOfRoute[2][0] && stopsOfRoute[2][0].Stops.forEach(stop => {
            const d = getDistance(stop, userLocation);
            if (d < distance && d < distance_bound) {
                distance = d;
                nearest_stop = stop.StopUID;
            }
        });
        res[2] = nearest_stop;

        setPinStop(res);
    }
        , [stopsOfRoute, userLocation]);


    return (
        <div className="arrival-time-block h-full flex flex-col">
            <div className="flex justify-between">
                <span></span>
                <div className="flex justify-center items-center tracking-widest mr-1 cursor-pointer py-1" onClick={() => setHideMap(!hideMap)}>
                    <img src={map} className="h-4 mr-2" alt="地圖圖案"></img>
                    {hideMap ? "打開地圖" : "收起地圖"}
                </div>
            </div>
            <div className={"grow-0 transition-all " + (hideMap ? 'h-0' : 'h-60 lg:h-80')}>
                <div className={`w-full  h-60 lg:h-80`}>
                    {pinStop && stopsOfRoute && <BusRouteMap stopsOfRoute={stopsOfRoute} mapStop={mapStop} direction={direction} data={estimateData} />}
                </div>
            </div>
            <div className="z-10 bg-white">
                <div className="flex items-center ">
                    {0 in estimateData && estimateData[0].length > 0 &&
                        <div className={`flex-1 flex items-center justify-center arrival-time-direction-toggle ` + (direction === 0 ? 'on' : null)} onClick={() => setDirection(0)}>
                            往&nbsp;<span className="font-bold">{RouteData.DestinationStopNameZh}</span>
                        </div>
                    }
                    {1 in estimateData && estimateData[1].length > 0 &&
                        <div className={`flex-1 flex items-center justify-center arrival-time-direction-toggle ` + (direction === 1 ? 'on' : null)} onClick={() => setDirection(1)}>
                            往&nbsp;<span className="font-bold">{RouteData.DepartureStopNameZh}</span>
                        </div>
                    }
                    {2 in estimateData && estimateData[2].length > 0 &&
                        <div className={`flex-1 flex items-center justify-center arrival-time-direction-toggle ` + (direction === 2 ? 'on' : null)} onClick={() => setDirection(2)}>
                            <span className="font-bold">迴圈</span>
                        </div>
                    }
                </div>
                <div id="timeList" className="max-h-screen bg-white shadow-lg   px-4  overflow-auto relative" style={{ height: (hideMap ? "75vh" : "30vh") }}>
                    {
                        direction in estimateData &&
                        estimateData[direction].map(item => {
                            return <EstimatedTimeItem key={item.StopSequence} setMapStop={setMapStop} data={item} pinStop={pinStop} direction={direction} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}