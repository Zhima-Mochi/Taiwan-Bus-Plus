import { useEffect, useState } from 'react';
import favorite_24dp from '../../assets/icons/favorite_24dp.svg'
import favorite_border_24dp from '../../assets/icons/favorite_border_24dp.svg'

export default function LikedBusRoute({ RouteUID, className }) {
    const [isLike, setIsLike] = useState(false);
    // check if it is liked or not
    useEffect(() => {
        let liked_bus_route_list = JSON.parse(localStorage.getItem("liked_bus_route_list"));
        if (!liked_bus_route_list) {
            localStorage.setItem("liked_bus_route_list", JSON.stringify([]));
            liked_bus_route_list = JSON.parse(localStorage.getItem("liked_bus_route_list"));
        }
        setIsLike(liked_bus_route_list.find(uid => uid === RouteUID) ? true : false);
    }, [RouteUID]);
    // toggle handle
    function clickHandle() {
        if (isLike) {
            let liked_bus_route_list = JSON.parse(localStorage.getItem("liked_bus_route_list"));
            const index = liked_bus_route_list.findIndex(uid => uid === RouteUID);
            if (index !== -1) {
                liked_bus_route_list.splice(index, 1);
                localStorage.setItem("liked_bus_route_list", JSON.stringify(liked_bus_route_list));
            }
            setIsLike(false);
        } else {
            let liked_bus_route_list = JSON.parse(localStorage.getItem("liked_bus_route_list"));
            const index = liked_bus_route_list.findIndex(uid => uid === RouteUID);
            if (index === -1) {
                liked_bus_route_list.push(RouteUID);
                localStorage.setItem("liked_bus_route_list", JSON.stringify(liked_bus_route_list));
            }
            setIsLike(true);
        }
    }
    return <img className={className+ " p-3 "} src={isLike ? favorite_24dp : favorite_border_24dp} alt={isLike ? "已收藏 liked" : "收藏他 like"} onClick={
        (e) =>{
        e.preventDefault();
        clickHandle();
    } } />;
}