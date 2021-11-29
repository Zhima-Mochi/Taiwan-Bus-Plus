import axios from "axios";
import {
    Trie
} from "../../../constants/Trie";
import {
    route_city_data
} from "../city_data";
import getAuthorizationHeader from "../getAuthorizationHeader";


const DEBUG = process.env.REACT_APP_DEBUG === '1';


const BusRouteType = {
    11: '市區公車',
    12: '公路客運',
    13: '國道客運',
    14: '接駁車'
};


async function getBusCityRoute(city) {
    return axios({
            method: 'get',
            url: `https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/${city}?$format=JSON`,
            headers: getAuthorizationHeader()
        })
        .then((response) => {
            DEBUG && console.log(`${route_city_data[city]}公車路線資料`, response);
            return response.data;
        })
        .catch((error) => console.log(`error: ${route_city_data[city]}公車路線資料 `, error))
}

export async function getAllBusCityRoute() {
    let promise_arr = [];
    Object.keys(route_city_data).forEach(city => {
        promise_arr.push(getBusCityRoute(city));
    });
    let data_arr = [];
    return Promise.all(promise_arr)
        .then(items => items.forEach(item => data_arr.push(...item)))
        .then(() => data_arr)
        .catch((e) => {
            console.log('error: getAllBusCityRoute() ', e);
        });
}

function findFirstDigit(route_name) {
    for (let i = 0; i < route_name.length; ++i) {
        if (route_name[i] >= '0' && route_name[i] <= '9') {
            return i;
        }
    }
    return -1;
}

export function getBusRouteTrie(bus_route) {
    let t = new Trie();
    bus_route.forEach((route, ind) => {
        route.RouteName.Zh_tw && t.insert(route.RouteName.Zh_tw, ind);
        if (route.RouteName.En && route.RouteName.En !== route.RouteName.Zh_tw) {
            t.insert(route.RouteName.En, ind)
        }
        const first_digit_ind = findFirstDigit(route.RouteName.Zh_tw);
        if (first_digit_ind > 0) {
            t.insert(route.RouteName.Zh_tw.slice(first_digit_ind), ind);
        }
    });
    return t;
}