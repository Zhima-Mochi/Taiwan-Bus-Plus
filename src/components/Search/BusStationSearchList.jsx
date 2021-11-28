import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { city_data } from '../../api/TDX/city_data';
import { BusRouteContext } from '../../App';
export default function BusStationSearchList({ station_list, busStation, inputContent }) {
    const busRoute = useContext(BusRouteContext);
    const [city, setCity] = useState("");
    const [prepare, setPrepare] = useState({});
    useState(() => {
        let p = {};
        busStation.forEach(station => {
            if (!p[station.City]) {
                p[station.City] = [];
            }
            if (p[station.City].length < 500) {
                p[station.City].push(station);
            }
        });
        setPrepare(p);
    }, [busStation]);
    if (inputContent && inputContent.length === 0 && city !== "") {
        if (prepare[city]) {
            station_list = prepare[city];
        }
    };
    return (
        <>
            <div className="flex justify-between mx-4">
                <span></span>
                <select className="bg-white" onChange={(e) => setCity(e.target.value)}>
                    <option value="">全縣市</option>
                    {Object.entries(city_data).map(city => (
                        <option key={city[0]} value={city[0]}>{city[1]}</option>
                    ))}
                </select>
            </div>
            <div className="max-h-screen overflow-y-auto shadow-lg " style={{ height: "75vh" }}>
                {
                    station_list.filter(data => {
                        if (city === "" || data.City === city) {
                            return data;
                        }
                    }).map(data => {
                        return (
                            <div key={data.StationUID} className="station-search-item">
                                <span className="station-name">{data.StationName}</span><span className="station-city">（{city_data[data.City]}）</span>
                                <span className="station-address">{data.StationAddress}</span>
                                <br />
                                <span>站點路線：</span>
                                <div className="flex flex-wrap">
                                    {data.Stops.map((data, ind) => (
                                        // RouteUID repeat
                                        <Link key={ind} to={`/bus_estimated_time/${data.RouteUID}`}>
                                            <span className="pin-icon-route-name">{busRoute.find(route => route.RouteUID === data.RouteUID).RouteName.Zh_tw}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}