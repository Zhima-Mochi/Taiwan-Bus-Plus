import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { BusRouteContext } from "../App";
import west_24dp from '../assets/icons/west_24dp.svg';
import BusRouteSearchList from "../components/Search/BusRouteSearchList";

export default function LikedList() {
    const busRoute = useContext(BusRouteContext);
    const history = useHistory();
    const [data, setData] = useState([]);
    const likedRouteList = busRoute.length ? JSON.parse(localStorage.getItem("liked_bus_route_list")).map(RouteUID => busRoute.find(route => route.RouteUID === RouteUID)) : [];
    return (
        <section className="bg-white  pt-4 lg:pb-10 h-full">
            <div className="view-border h-full flex flex-col">
                <div className="bg-white flex pl-1" onClick={() => history.goBack()} style={{ cursor: "pointer" }}>
                    <img src={west_24dp} alt='回上一頁 back to previous page' />
                    <span className="ml-2">返回首頁</span>
                </div>
                <div className="max-h-screen overflow-y-auto shadow-lg " style={{ height: "75vh" }}>
                    {likedRouteList && likedRouteList.length > 0 && <BusRouteSearchList route_list={likedRouteList} />}
                </div>
            </div>
        </section>
    )
}