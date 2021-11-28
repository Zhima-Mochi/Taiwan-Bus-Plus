import { useState } from 'react';
import { Link } from 'react-router-dom';
import { route_city_data } from '../../api/TDX/city_data';
import LikedBusRoute from '../LocalStorage/LikedBusRoute';
export default function BusRouteSearchList({ route_list, busRoute, inputContent }) {
    const [city, setCity] = useState("");
    if (inputContent && inputContent.length === 0 && city !== "") {
        route_list = busRoute;
    }
    return (
        <>
            <div className="flex justify-between mx-4">
                <span></span>
                <select className="bg-white" onChange={(e) => setCity(e.target.value)}>
                    <option value="">全縣市</option>
                    {Object.entries(route_city_data).map(city => (
                        <option key={city[0]} value={city[0]}>{city[1]}</option>
                    ))}
                </select>
            </div>
            <div className="max-h-screen overflow-y-auto shadow-lg " style={{ height: "75vh" }}>
                {
                    route_list.filter(data => {
                        if (city === "" || data.City === city) {
                            return data;
                        }
                    }).map((data, ind) => {
                        return (
                            <Link key={data.RouteUID} to={`/bus_estimated_time/${data.RouteUID}`}>
                                <div className="route-search-item">
                                    <div>
                                        <span className="route-name">{data.RouteName.Zh_tw}</span>
                                        <span className="route-city">（{route_city_data[data.City]}）</span>
                                        <br />
                                        <span className="route-depart-dest">{data.DepartureStopNameZh}-{data.DestinationStopNameZh}</span>
                                    </div>
                                    <LikedBusRoute RouteUID={data.RouteUID} />
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    );
}