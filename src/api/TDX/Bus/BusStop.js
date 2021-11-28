import axios from "axios";
import {
    stop_city_data
} from "../city_data";
import getAuthorizationHeader from "../getAuthorizationHeader";

export async function getStopsOfRoute(city, RouteUID) {
    return axios({
            method: 'get',
            url: `https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/${city}?$filter=RouteUID%20eq%20'${RouteUID}'&$format=JSON`,
            headers: getAuthorizationHeader()
        })
        .then((response) => {
            return response.data;
        }).then((data) => {
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
        .catch((error) => console.log(`error: ${stop_city_data[city]}公車站牌資料 `, error))

}