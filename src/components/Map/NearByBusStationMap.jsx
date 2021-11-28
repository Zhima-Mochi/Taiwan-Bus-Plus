import { useContext, useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { BusRouteContext, BusStationContext, UserLocationContext } from '../../App';
import pin from '../../assets/icons/pin.svg';
import bus from '../../assets/icons/directions_bus_filled_24dp.svg';

import { Icon } from 'leaflet';
import { getNearByBusStation } from '../../api/TDX/Bus/BusStation';
import { DEBUG } from '../../constants/debug';
import { Link } from 'react-router-dom';

const pin_icon = new Icon({
    iconUrl: pin,
    iconSize: [24, 24],
    className: 'leaflet-marker-icon pin-icon red'
});

const bus_icon = new Icon({
    iconUrl: bus,
    iconSize: [36, 36],
    className: 'leaflet-marker-icon'
})



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

function PinNearByBusStationPosition({ nearByBusStation }) {
    const busRoute = useContext(BusRouteContext);
    return (
        nearByBusStation.map(station => {
            return (
                <Marker key={station.StationUID} position={[station.StationPosition.PositionLat, station.StationPosition.PositionLon]} icon={bus_icon}>
                    <Popup>
                        <span className="pin-icon-station-name">{station.StationName}</span><br />
                        <span className="pin-icon-station-address">{station.StationAddress}</span><br />
                        {station.Stops.map((stop, ind) => (
                            <Link key={stop.RouteUID} to={`/bus_estimated_time/${stop.RouteUID}`}>
                                <span className="pin-icon-route-name">{busRoute.find(route => route.RouteUID === stop.RouteUID).RouteName.Zh_tw}</span>
                            </Link>
                        ))}
                    </Popup>
                </Marker>
            )
        })
    );
}


export default function NearByBusStationMap() {
    const userLocation = useContext(UserLocationContext);
    const busStation = useContext(BusStationContext);
    const [map, setMap] = useState(null);
    const [nearByBusStation, setNearByBusStation] = useState([]);
    useEffect(() => {
        if (map) {
            map.setView([userLocation.latitude, userLocation.longitude]);
        }
    }, [map, userLocation]);
    useEffect(() => {
        setNearByBusStation(getNearByBusStation(busStation, userLocation));
    }, [busStation, userLocation]);

    DEBUG && console.log('near by bus station', getNearByBusStation(busStation, userLocation));

    return (
        <MapContainer center={[22.9977325, 120.2141299]} zoom={16} scrollWheelZoom={false} whenCreated={setMap}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[userLocation.latitude, userLocation.longitude]} icon={pin_icon}>
                <Popup>
                    <div className="pin-here">你在這裡</div>
                    附近有<span className="text-blue-800 font-bold mx-1">{nearByBusStation.length}</span>個站點
                </Popup>
            </Marker>
            <PinNearByBusStationPosition nearByBusStation={nearByBusStation} />
        </MapContainer>
    )
}