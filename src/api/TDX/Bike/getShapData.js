import axios from "axios";
import getAuthorizationHeader from "../getAuthorizationHeader";
import DEBUG from "../constants/debug";
import city_shape_options from "../constants/city_shape"
import geometryTransform from "./geometryTransform";

export async function getCityShapeData(city = "NewTaipei") {

    return axios({
            method: 'get',
            url: `https://ptx.transportdata.tw/MOTC/v2/Cycling/Shape/${city}?$format=JSON`,
            headers: getAuthorizationHeader()
        })
        .then((response) => {
            DEBUG && console.log('City shape data', response);
            return response.data;
        })
        .catch((error) => console.log('city', city, 'error', error))
}

export async function getAllShapeData() {
    let promise_arr = []
    for (let city in city_shape_options) {
        promise_arr.push(getCityShapeData(city));
    }
    let data_list = [];
    return Promise.all(promise_arr)
    .then(items => items.forEach(item => data_list.push(...item)))
    .then(() => data_list.forEach(item=>item["Geometry"]=geometryTransform(item["Geometry"])))
    .then(()=>data_list)
    .catch((e)=>{
        console.log('error',e);
    });
}