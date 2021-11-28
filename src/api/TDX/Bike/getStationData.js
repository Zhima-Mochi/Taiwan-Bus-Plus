import DEBUG from "../constants/debug";

import axios from "axios";
import getAuthorizationHeader from "../getAuthorizationHeader";

export async function getStationNearByData(longitude, latitude, radius = 500000) {
    return axios({
            method: 'get',
            url: `https://ptx.transportdata.tw/MOTC/v2/Bike/Station/NearBy?$spatialFilter=nearby(${latitude},${longitude},500)`,
            headers: getAuthorizationHeader()
        })
        .then((response) => {
            DEBUG && console.log('租借站位資料', response);
            return response.data;
        })
        .catch((error) => console.log('error', error))
}

export async function getStationCityData(city = "NewTaipei") {
    return axios({
            method: 'get',
            url: `https://ptx.transportdata.tw/MOTC/v2/Bike/Station/${city}/?$format=JSON`,
            headers: getAuthorizationHeader()
        })
        .then((response) => {
            DEBUG && console.log('租借站位資料', response);
            return response.data;
        })
        .catch((error) => console.log('error', error))
}