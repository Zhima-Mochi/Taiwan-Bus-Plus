import BusEstimatedTime from "../pages/BusEstimatedTime";
import FindBusRoute from "../pages/FindBusRoute";
import FindBusStation from "../pages/FindBusStation";
import Home from "../pages/Home";
import LikedList from "../pages/LikedList";
import NearByBusStation from "../pages/NearByBusStation";

const routes = [{
    path: '/',
    exact: true,
    component: Home,
}
, 
{
    path: '/find_bus_route/',
    exact: false,
    component: FindBusRoute,
}, {
    path: '/bus_estimated_time/:RouteUID',
    exact: false,
    component: BusEstimatedTime,
}, {
    path: '/near_by_bus_station/',
    exact: false,
    component: NearByBusStation,
},{
    path:'/find_bus_station/',
    exact: false,
    component: FindBusStation,
},{
    path:'/liked_list/',
    exact: false,
    component: LikedList,
}
];

export default routes;