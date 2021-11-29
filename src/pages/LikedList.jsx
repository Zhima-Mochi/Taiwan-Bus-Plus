import { useContext} from "react";
import { BusRouteContext } from "../App";
import BusRouteSearchList from "../components/Search/BusRouteSearchList";
import BackPage from "../components/Utils/BackPage";

export default function LikedList() {
    const busRoute = useContext(BusRouteContext);
    const likedRouteList = busRoute.length && localStorage.getItem("liked_bus_route_list") ? JSON.parse(localStorage.getItem("liked_bus_route_list")).map(RouteUID => busRoute.find(route => route.RouteUID === RouteUID)) : [];
    return (
        <section className="bg-white  pt-4 lg:pb-10 h-full">
            <BackPage />
            <div className="view-border h-full flex flex-col">
                <div className="max-h-screen overflow-y-auto shadow-lg " style={{ height: "75vh" }}>
                    {likedRouteList && likedRouteList.length > 0 ? <BusRouteSearchList route_list={likedRouteList} busRoute={[]} inputContent="*" /> : <div className="flex justify-center items-center my-10">您還沒有收藏路線</div>}
                </div>
            </div>
        </section>
    )
}