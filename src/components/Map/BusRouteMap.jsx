import { useContext, useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, Polyline } from 'react-leaflet'
import { BusStationContext, UserLocationContext } from '../../App';
import pin from '../../assets/icons/pin.svg';
import bus from '../../assets/icons/directions_bus_filled_24dp.svg';
import point from '../../assets/icons/radio_button_checked_black_24dp.svg';
import red_point from '../../assets/icons/radio_button_checked_red_24dp.svg';
import { Icon } from 'leaflet';

const pin_icon = new Icon({
    iconUrl: pin,
    iconSize: [24, 24],
    className: 'leaflet-marker-icon pin-icon red'
});

const point_icon = new Icon({
    iconUrl: point,
    iconSize: [40, 40],
    className: 'leaflet-marker-icon'
})

const red_point_icon = new Icon({
    iconUrl: red_point,
    iconSize: [40, 40],
    className: 'leaflet-marker-icon'
})

function PinStop({ stopsOfRoute, direction, mapStop = "", commingStop }) {
    if (stopsOfRoute[direction] && stopsOfRoute[direction][0]) {
        return (
            stopsOfRoute[direction][0].Stops.map((data, ind, arr) => {
                if (commingStop && commingStop.indexOf(data.StopUID) !== -1) {
                    return (<div key={data.StopUID}>
                        <Marker position={[data.StopPosition.PositionLat, data.StopPosition.PositionLon]} icon={red_point_icon}>
                            <Popup >
                                <span>{data.StopName.Zh_tw}</span>
                            </Popup>
                        </Marker>
                    </div>)
                } else {

                    return (
                        <div key={data.StopUID}>
                            <Marker position={[data.StopPosition.PositionLat, data.StopPosition.PositionLon]} icon={point_icon}>
                                <Popup >
                                    <span>{data.StopName.Zh_tw}</span>
                                </Popup>
                            </Marker>
                        </div>
                    )
                }
            })
        );
    } else {
        return null;
    }
}

function DrawBlueRoute({ stopsOfRoute, direction, mapStop = "", commingStop }) {
    if (stopsOfRoute[direction] && stopsOfRoute[direction][0]) {
        return (
            stopsOfRoute[direction][0].Stops.map((data, ind, arr) =>
                <div key={data.StopUID}>
                    {ind > 0 && commingStop.indexOf(data.StopUID) === -1 && <Polyline weight={8} color="#355F8B" key={ind} positions={[[arr[ind - 1].StopPosition.PositionLat, arr[ind - 1].StopPosition.PositionLon], [data.StopPosition.PositionLat, data.StopPosition.PositionLon]]} />}
                </div>
            )
        );
    } else {
        return null;
    }
}

function DrawRedRoute({ stopsOfRoute, direction, mapStop = "", commingStop }) {
    if (stopsOfRoute[direction] && stopsOfRoute[direction][0]) {
        return (
            stopsOfRoute[direction][0].Stops.map((data, ind, arr) =>
                <div key={data.StopUID}>
                    {ind > 0 && commingStop.indexOf(data.StopUID) !== -1 && <Polyline weight={8} color="#D08181" key={ind} positions={[[arr[ind - 1].StopPosition.PositionLat, arr[ind - 1].StopPosition.PositionLon], [data.StopPosition.PositionLat, data.StopPosition.PositionLon]]} />}
                </div>
            )
        );
    } else {
        return null;
    }
}

export default function BusRouteMap({ stopsOfRoute, direction, mapStop, commingStop }) {
    const userLocation = useContext(UserLocationContext);
    const busStation = useContext(BusStationContext);
    const [map, setMap] = useState(null);
    useEffect(() => {
        if (map) {
            if (stopsOfRoute[direction] && stopsOfRoute[direction][0] && stopsOfRoute[direction][0].Stops.length) {
                // const pos = stopsOfRoute[direction][0].Stops[Math.floor(stopsOfRoute[direction][0].Stops.length / 2)].StopPosition;
                let pos = stopsOfRoute[direction][0].Stops[0].StopPosition;
                if (mapStop && mapStop[direction]) {
                    const target_stop = stopsOfRoute[direction][0].Stops.find(stop => stop.StopUID === mapStop);
                    if (target_stop) {
                        pos = target_stop.StopPosition;
                    }
                }
                map.setView([pos.PositionLat, pos.PositionLon]);
            }
        }
    }, [map, stopsOfRoute, direction, mapStop]);


    return (
        <MapContainer tap={false} center={[22.9977325, 120.2141299]} zoom={16} scrollWheelZoom={false} whenCreated={setMap}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[userLocation.latitude, userLocation.longitude]} icon={pin_icon}>
                <Popup >
                    <div className="pin-here">你在這裡</div>
                </Popup>
            </Marker>
            <PinStop mapStop={mapStop} stopsOfRoute={stopsOfRoute} direction={direction} commingStop={commingStop} />
            <DrawBlueRoute mapStop={mapStop} stopsOfRoute={stopsOfRoute} direction={direction} commingStop={commingStop} />
            <DrawRedRoute mapStop={mapStop} stopsOfRoute={stopsOfRoute} direction={direction} commingStop={commingStop} />
        </MapContainer>
    )
}



// const map_icon = new Icon({
//     iconUrl: map,
//     iconSize: [32, 32],
//     className: 'leaflet-marker-icon route'
// })


// function getCorners(geometry) {
//     let top = geometry[0][0], left = geometry[0][1];
//     let bottom = top, right = left;
//     for (let geo of geometry) {
//         if (geo[0] > top) {
//             top = geo[0];
//         } else if (geo[0] < bottom) {
//             bottom = geo[0];
//         }
//         if (geo[1] < left) {
//             left = geo[1];
//         } else if (geo[1] > right) {
//             right = geo[1];
//         }
//     }
//     return [[bottom, left], [top, right]];
// }

// function getCenter(corners) {
//     return [(corners[0][0] + corners[1][0]) / 2, (corners[0][1] + corners[1][1]) / 2];
// }

// function getDiameter(corners) {
//     return Math.pow(Math.pow(corners[0][0] - corners[0][1], 2) + Math.pow(corners[1][0] - corners[1][1], 2), 0.5)
// }

// const routeOptions = { color: '#51AB5B' }

// export default function RouteMap({ geometry, distance, seeToggle = true }) {
//     const userLocation = useContext(UserLocation);
//     const [map, setMap] = useState(null);
//     const [mode, setMode] = useState("borrow");

//     // api is latitude first then longitude
//     geometry = geometry.map(item => [item[1], item[0]]);
//     let geometry_group = [];
//     let prev＿start = 0;
//     for (let i = 1; i < geometry.length; ++i) {
//         if (!geometry[i][0] || !geometry[i][1]) {
//             geometry_group.push(geometry.slice(prev＿start, i));
//             ++i;
//             prev＿start = i + 1;
//         }
//     }
//     geometry_group.push(geometry.slice(prev＿start, geometry.length));



//     const corners = getCorners(geometry);
//     // center is center of geometry center and start position
//     const center = getCenter([getCenter(corners), geometry[0]]);
//     // const diameter = getDiameter(corners);
//     const zoom = (
//         distance <= 500 ? 16 :
//             distance <= 3000 ? 15 :
//                 14
//     )
//     useEffect(() => {
//         if (map) {
//             map.setView(center, zoom);
//         }
//     }, [map, center]);


//     function handleClick() {
//         if (mode === 'borrow') {
//             setMode('return');
//         } else {
//             setMode('borrow');
//         }
//     }

//     return (
//         <>
//             {seeToggle && <BorrowReturnToggle isToggleOn={mode === 'return'} handleClick={handleClick} />}
//             <MapContainer center={[25.0210905, 121.5353809]} zoom={15} scrollWheelZoom={false} whenCreated={setMap}>
//                 <TileLayer
//                     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 {geometry_group.map((item, ind) => {
//                     return (
//                         <Polyline key={ind} pathOptions={routeOptions} positions={item} />
//                     )
//                 })}
//                 {seeToggle && <BikePosition mode={mode} location={geometry[0]} />}
//                 <Marker position={geometry[0]} icon={map_icon}>
//                     <Popup>
//                         起點
//                     </Popup>
//                 </Marker>
//             </MapContainer>
//         </>
//     );
// }