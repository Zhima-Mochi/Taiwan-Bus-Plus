import NearByBusStationMap from "../components/Map/NearByBusStationMap";

import BackPage from "../components/Utils/BackPage";

export default function NearByBusStation() {

    return (
        <section className="h-full">
            <div >
                <BackPage />
                <div className="  flex justify-center items-center h-20">
                    <div className="bus-stationname">
                        附近的公車站點
                    </div>
                </div>
            </div>
            <div className="">
                <div className="w-screen  max-w-full lg:shadow-lg" style={{ height: "70vh" }} >
                    <NearByBusStationMap />
                </div>
            </div>
        </section>
    );

}