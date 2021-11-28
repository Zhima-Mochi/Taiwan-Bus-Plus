import axios from "axios";
import {
    Trie
} from "../../../constants/Trie";
import {
    city_data,
    stop_city_data
} from "../city_data";
import getAuthorizationHeader from "../getAuthorizationHeader";


const DEBUG = process.env.REACT_APP_DEBUG === '1';

// Bus station data
// {
//     City,
//     StationUID,
//     StationName,
//     StationEnName,
//     StationPosition,
//     StationAddress,
//     Stops,
// }

// StationPosition: {
//     PositionLat,
//     PositionLon
// }

// Stops:[
//     {
//         StopUID
//         RouteUID
//     }
// ]

async function getBusCityStation(city) {
    return axios({
            method: 'get',
            url: `https://ptx.transportdata.tw/MOTC/v2/Bus/Station/City/${city}?$format=JSON`,
            headers: getAuthorizationHeader()
        })
        .then((response) => {
            DEBUG && console.log(`${city_data[city]}公車站位資料`, response);
            let datas = response.data;
            // Extract necessary attributes
            datas = datas.map(data => {
                data.StationEnName = data.Stops[0].StopName.En;
                data.Stops = data.Stops.map(stop => {
                    return {
                        StopUID: stop.StopUID,
                        RouteUID: stop.RouteUID,
                        // RouteName: stop.RouteName.Zh_tw,
                        // RouteEnName: stop.RouteName.En,
                    }
                })
                return {
                    City: city,
                    StationUID: data.StationUID,
                    StationName: data.StationName.Zh_tw,
                    StationEnName: data.StationEnName,
                    StationPosition: data.StationPosition,
                    StationAddress: data.StationAddress,
                    Stops: data.Stops
                };
            });
            return datas;
        })
        .catch((error) => console.log(`error: ${city_data[city]}公車站位資料 `, error))
}

export async function getAllBusCityStation() {
    let promise_arr = [];
    Object.keys(city_data).forEach(city => {
        promise_arr.push(getBusCityStation(city));
    });
    let datas = [];
    return Promise.all(promise_arr)
        .then(items => items.forEach(item => datas.push(...item)))
        // get city stop-to-station data which has no station data
        // however it is a bit large
        // .then(datas => {
        //     let promise_arr = [];
        //     Object.keys(stop_city_data).filter(city=>city_data[city]!==stop_city_data[city]).forEach(
        //         city=>{
        //             DEBUG && console.log('no station data city: ' ,city);
        //             promise_arr.push(getBusCityStopToStation(city)); 
        //         }
        //     ) 
        //     return Promise.all(promise_arr)
        //         .then(items => items.forEach(item => datas.push(...item)))
        //         .then(() => datas)
        // })
        .then(() => {
            // For binary Search for position
            datas=datas.sort(function (a, b) {
                if (a.StationPosition.PositionLon < b.StationPosition.PositionLon) {
                    return -1;
                    // } else if (a.StationPosition.PositionLon === b.StationPosition.PositionLon) {
                    //     return a.StationPosition.PositionLat < b.StationPosition.PositionLLat
                } else {
                    return 1;
                }
            });
            return datas;
        })
        .catch((e) => {
            console.log('error: getAllBusCityStation() ', e);
        });
}

function binarySearchLon(bus_station, goal_lon, left, right) {
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (bus_station[mid].StationPosition.PositionLon < goal_lon) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

// unit: meter
function distance(station, center) {
    const x = (station.StationPosition.PositionLon - center.longitude) * 100000;
    const y = (station.StationPosition.PositionLat - center.latitude) * 100000;
    return Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 0.5);
}
// radius unit: meter
export function getNearByBusStation(bus_station, center, radius = 500) {
    if (bus_station.length === 0) {
        return [];
    }
    // 0.01 longitude or latitude is approximate 1 kilometer.
    const adjusted_radius = radius / 100000;
    const right_index = binarySearchLon(bus_station, center.longitude + adjusted_radius, 0, bus_station.length);
    const left_index = binarySearchLon(bus_station, center.longitude - adjusted_radius, 0, right_index);
    let res = [];
    for (let i = left_index; i < right_index; ++i) {
        if (distance(bus_station[i], center) < radius) {
            res.push(bus_station[i]);
        }
    }
    return res;

}

export function getBusStationTrie(bus_station) {
    let t = new Trie();
    bus_station.forEach((station, ind) => {
        station.StationName && t.insert(station.StationName, ind);
        if (station.StationEnName && station.StationEnName !== station.StationName) {
            t.insert(station.StationEnName, ind)
        }
    });
    return t;
}


async function getBusCityStopToStation(city) {
    return axios({
            method: 'get',
            url: `https://ptx.transportdata.tw/MOTC/v2/Bus/Stop/City/${city}?$format=JSON`,
            headers: getAuthorizationHeader()
        })
        .then((response) => {
            return response.data;
        })
        .then(res => {
            res = res.map(stop => {
                return {
                    City: stop.City,
                    StationUID: stop.StopUID,
                    StationName: stop.StopName.Zh_tw,
                    StationEnName: stop.StopName.En,
                    StationPosition: stop.StopPosition,
                    Stops: [{
                        StopUID: stop.StopUID,
                    }],
                };
            });
            return res;
        })
        .catch((error) => console.log(`error: ${stop_city_data[city]}公車站牌資料 `, error))

}