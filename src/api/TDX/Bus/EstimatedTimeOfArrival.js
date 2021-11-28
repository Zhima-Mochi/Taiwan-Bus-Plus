import axios from "axios";
import {
    DEBUG
} from "../../../constants/debug";
import getAuthorizationHeader from "../getAuthorizationHeader";


async function getStopOfRoute(city, routeUID) {
    return axios({
            method: 'get',
            url: `https://ptx.transportdata.tw/MOTC/v2/Bus/DisplayStopOfRoute/City/${city}?$select=Direction%2CStops&$filter=RouteUID%20eq%20'${routeUID}'&$format=JSON`,
            headers: getAuthorizationHeader()
        })
        .then((response) => {
            DEBUG && console.log(`${routeUID} StopOfRoute`, response);
            return response.data;
        })
        .catch((error) => console.log(`error: StopOfRoute `, error))
}


// {
//     "StopUID": "TPE34747",
//     "StopName": {
//         "Zh_tw": "龍山寺(康定)",
//         "En": "Longshan Temple(Kangding)"
//     },
//     "RouteUID": "TPE10181",
//     "RouteName": {
//         "Zh_tw": "205",
//         "En": "205"
//     },
//     "Direction": 1,
//     "EstimateTime": 74,
//     "StopStatus": 0,
//     "SrcUpdateTime": "2021-11-24T18:44:20+08:00",
//     "UpdateTime": "2021-11-24T18:44:24+08:00"
// }, {
//     "StopUID": "TPE34746",
//     "StopName": {
//         "Zh_tw": "萬華車站",
//         "En": "Wanhua Station"
//     },
//     "RouteUID": "TPE10181",
//     "RouteName": {
//         "Zh_tw": "205",
//         "En": "205"
//     },
//     "Direction": 1,
//     "EstimateTime": 1991,
//     "StopStatus": 0,
//     "SrcUpdateTime": "2021-11-24T18:44:20+08:00",
//     "UpdateTime": "2021-11-24T18:44:24+08:00"
// },

export async function getBusRouteEstimatedArrival(city, routeUID) {
    return axios({
            method: 'get',
            url: `https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${city}?$select=PlateNumb%2CStopUID%2CStopName%2CRouteUID%2CRouteName%2CSubRouteUID%2CSubRouteName%2CDirection%2CEstimateTime%2CCurrentStop%2CDestinationStop%2CStopSequence%2CStopStatus%2CNextBusTime%2CIsLastBus%2CSrcUpdateTime&$filter=RouteUID%20eq%20'${routeUID}'&$orderby=StopSequence&$format=JSON`,
            headers: getAuthorizationHeader()
        })
        .then(async (response) => {
            DEBUG && console.log(`${routeUID} 時間資料`, response);
            let data = response.data;
            return getStopOfRoute(city, routeUID)
                .then(route_data => {
                    if (route_data && route_data.length > 0) {
                        data.forEach(stop => {
                            stop.StopSequence = route_data.find(route_dir_stop =>
                                stop.Direction === route_dir_stop.Direction
                            ).Stops.find(route_stop => route_stop.StopUID === stop.StopUID).StopSequence;
                        });
                    } else {
                        data.forEach((stop, ind) => {
                            stop.StopSequence = ind;
                        });
                    }
                })
                .then(() => {
                    let res = {
                        0: [],
                        1: [],
                        2: [],
                        255: []
                    };
                    data.forEach(item => {
                        res[item.Direction].push(item);
                    });
                    for (let item in res) {
                        res[item] = res[item].sort((a, b) =>
                            +a.StopSequence < +b.StopSequence ? -1 : 1
                        );
                    }
                    return res;
                })
        })
        .catch((error) => console.log(`error: estimated arrival `, error))
}


















// PlateNumb,StopUID,StopName,RouteUID,RouteName,SubRouteUID,SubRouteName,Direction,EstimateTime,CurrentStop,DestinationStop,StopSequence,StopStatus,NextBusTime,IsLastBus,SrcUpdateTime