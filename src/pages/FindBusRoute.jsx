import { useContext, useEffect, useState } from "react";
import { getBusRouteTrie } from "../api/TDX/Bus/BusRoute";
import { BusRouteContext } from "../App";
import BusRouteSearchList from "../components/Search/BusRouteSearchList";
import { Trie } from "../constants/Trie";
import search_black_24dp from '../assets/icons/search_black_24dp.svg';
import BackPage from "../components/Utils/BackPage";


function FindBusRouteInput({ inputHandle }) {

    return (
        <div className="flex justify-center items-center">
            <div className="input-window flex justify-center items-center ">
                <img src={search_black_24dp} className="lookup" alt="尋找路線 serach icon" />
                <input className="input" placeholder="請輸入公車路線或號碼" autoComplete="off" onChange={e => inputHandle(e.target.value)}></input>
            </div>
        </div>
    );
}

export default function FindBusRoute() {
    const busRoute = useContext(BusRouteContext);
    const [inputContent, setInputContent] = useState("");
    const [routeList, setRouteList] = useState([]);
    const [busRouteTrie, setBusRouteTrie] = useState(new Trie());
    function getInputContent(content) {
        setInputContent(content);
    }

    //Build Trie for keyword selection
    useEffect(() => {
        if (busRoute) {
            setBusRouteTrie(getBusRouteTrie(busRoute))
        }
    }, [busRoute]);

    //Get candidates of route
    useEffect(() => {
        if (inputContent.length > 0) {
            setRouteList(busRouteTrie.findAllIndices(inputContent).sort().filter(
                (item, ind, arr) => ind === 0 || arr[ind - 1] !== arr[ind]).map(item_ind => busRoute[item_ind])
                // sort for keyword selection
                .sort((route1, route2) => {
                    return (route1.RouteName.Zh_tw.length < route2.RouteName.Zh_tw.length ? -1 : 1)
                })
            );
        } else {
            setRouteList(busRoute.slice(0, 50));
        }
    }, [inputContent, busRouteTrie, busRoute]);

    return (
        <section className="bg-white pt-4 lg:pb-10  ">
            <BackPage />
            <div className="view-border">
                <FindBusRouteInput inputHandle={getInputContent} />
                <BusRouteSearchList route_list={routeList} busRoute={busRoute} inputContent={inputContent} />
            </div>
        </section>
    );

}