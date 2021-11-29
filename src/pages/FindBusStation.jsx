import { useContext, useEffect, useState } from "react";
import { getBusStationTrie, getNearByBusStation } from "../api/TDX/Bus/BusStation";
import { BusStationContext, UserLocationContext } from "../App";
import BusStationSearchList from "../components/Search/BusStationSearchList";
import { Trie } from "../constants/Trie";
import search_black_24dp from '../assets/icons/search_black_24dp.svg';
import { DEBUG } from "../constants/debug";
import BackPage from "../components/Utils/BackPage";


function FindBusStationInput({ inputHandle }) {

    return (
        <div className="flex justify-center items-center">
            <div className="input-window flex justify-center items-center ">
                <img src={search_black_24dp} className="lookup" alt="尋找路線 serach icon" />
                <input className="input" placeholder="請輸入站點名稱" autoComplete="off" onChange={e => inputHandle(e.target.value)}></input>
            </div>
        </div>
    );
}

export default function FindBusStation() {
    const busStation = useContext(BusStationContext);
    const [inputContent, setInputContent] = useState("");
    const [stationList, setStationList] = useState([]);
    const [busStationTrie, setBusStationTrie] = useState(new Trie());

    const userLocation = useContext(UserLocationContext);
    const [nearByBusStation, setNearByBusStation] = useState([]);

    useEffect(() => {
        setNearByBusStation(getNearByBusStation(busStation, userLocation));
    }, [busStation, userLocation]);

    function getInputContent(content) {
        setInputContent(content);
    }

    //Build Trie for keyword selection
    useEffect(() => {
        if (busStation) {
            setBusStationTrie(getBusStationTrie(busStation))
        }
    }, [busStation]);

    //Get candidates of station
    useEffect(() => {
        if (inputContent.length > 0) {
            setStationList(busStationTrie.findAllIndices(inputContent).sort().filter(
                (item, ind, arr) => ind === 0 || arr[ind - 1] !== arr[ind]).map(item_ind => busStation[item_ind])
                // sort for keyword selection
                .sort((station1, station2) => {
                    return (station1.StationName.length < station2.StationName.length ? -1 : 1)
                })
            );
        } else if (nearByBusStation.length > 0) {
            setStationList(nearByBusStation);
        } else {
            const pick = Math.floor(busStation.length / 2);
            setStationList(busStation.slice(pick, pick + 10));
        }
        DEBUG && console.log(stationList)
    }, [inputContent, busStationTrie, busStation, nearByBusStation]);

    // test busStationTrie.findAllIndices('307').forEach(item => console.log(busStation[item]));

    return (
        <section className="bg-white  pt-4 lg:pb-10 h-full">
            <BackPage />
            <div className="view-border h-full flex flex-col">
                <FindBusStationInput inputHandle={getInputContent} />
                <BusStationSearchList station_list={stationList} busStation={busStation} inputContent={inputContent} />
            </div>
        </section>
    );

}
