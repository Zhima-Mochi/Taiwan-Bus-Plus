import { getAllBusCityStation } from "../../api/TDX/Bus/BusStation";
import LZString from "lz-string";
import { DEBUG } from "../../constants/debug";
import { useEffect, useState } from "react";
import { getExpireTime } from "./util";

let messages = [];
messages.push("你知道嗎？北一女中的公車站牌其實叫作一女中？趕緊到【站點查詢】試試吧！");
messages.push("跳蛙公車其實是會開上高速公路的公車喔！")
messages.push("到【尋找路線】查查看新北市F開頭的公車吧！市民不用錢喔！")

export default function StoreBusStation({ setBusStation }) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const saved_bus_station = JSON.parse(localStorage.getItem("bus_station") && LZString.decompressFromBase64(localStorage.getItem("bus_station")));
        if (!saved_bus_station || !saved_bus_station.data || new Date().getTime() > new Date(saved_bus_station.expire_time)) {
            DEBUG && console.log('restore bus_station');
            getAllBusCityStation()
                .then(res => {
                    setBusStation && setBusStation(res);
                    localStorage.setItem("bus_station", LZString.compressToBase64(JSON.stringify({
                        data: res,
                        expire_time: getExpireTime(3 * 24 * 3600 * 1000)
                    })));
                })
                .then(() => {
                    setLoading(false);
                });
        } else {
            DEBUG && console.log('current bus_station size:', localStorage.getItem("bus_station").length / 1024 / 1024, 'MB');
            DEBUG && console.log(`bus_staion expire_time: ${saved_bus_station.expire_time}`);
            setBusStation && setBusStation(saved_bus_station.data);
            setLoading(false);
        }
    }, [setBusStation]);

    return (loading &&
        <div className="bg-white font-bold opacity-90 z-50 w-full h-full fixed flex flex-col items-center justify-center">
            <p className="text-center mb-2 tracking-widest ">資料更新中…</p>
            <p className="text-center mb-10 tracking-widest">第一次更新需約15秒的時間</p>
            {messages.map((message, ind) => {
                return <p key={ind} className="w-1/2 transition-all my-2 font-bold tracking-widest">{ind + 1} {message}</p>
            })}
        </div>
    );
}