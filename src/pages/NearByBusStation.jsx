import { useState } from "react";
import { useHistory } from "react-router-dom";
import NearByBusStationMap from "../components/Map/NearByBusStationMap";

import west_24dp from '../assets/icons/west_24dp.svg';

export default function NearByBusStation() {

    const history = useHistory();
    return (
        <section className="h-full">
            <div >
                <div className=" view-border pt-2 flex pl-1" onClick={() => history.goBack()} style={{ cursor: "pointer" }}>
                    <img src={west_24dp} alt='回上一頁 back to previous page' />
                    <span className="ml-2">返回首頁</span>
                </div>
                <div className="  flex justify-center items-center h-20">
                    <div className="bus-stationname">
                        附近的公車站點
                    </div>
                </div>
            </div>
            <div className="">
                <div className="w-screen  max-w-full lg:shadow-lg" style={{height:"70vh"}} >
                    <NearByBusStationMap />
                </div>
            </div>
        </section>
    );

}