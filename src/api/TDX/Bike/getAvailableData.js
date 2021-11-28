import axios from "axios";
import getAuthorizationHeader from "../getAuthorizationHeader";
import DEBUG from "../constants/debug";

export default async function getAvailableData(longitude, latitude, stationData=[], radius = 500) {
    return axios({
            method: 'get',
            url: `https://ptx.transportdata.tw/MOTC/v2/Bike/Availability/NearBy?$spatialFilter=nearby(${latitude},${longitude},${radius})`,
            headers: getAuthorizationHeader()
        })
        .then((response) => {
            DEBUG && console.log('車位資料', response);
            const availableData = response.data;
            let filterData = [];
            // match
            availableData.forEach((availableItem) => {
                stationData.forEach((stationItem) => {
                    if (availableItem.StationUID === stationItem.StationUID) {
                        availableItem.StationName = stationItem.StationName
                        availableItem.StationAddress = stationItem.StationAddress
                        availableItem.StationPosition = stationItem.StationPosition
                        filterData.push(availableItem)
                    }
                })
            })
            DEBUG && console.log('filterData', filterData);
            return filterData;
        })
        .catch((error) => console.log('error', error))
}