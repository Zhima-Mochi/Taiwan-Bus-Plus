import { NavLink } from "react-router-dom";
import bus_c1 from '../assets/icons/bus_c1.svg';
import bus_c2 from '../assets/icons/bus_c2.svg';
import bus_c3 from '../assets/icons/bus_c3.svg';
import bus_c4 from '../assets/icons/bus_c4.svg';
import bus_c5 from '../assets/icons/bus_c5.svg';
import Banner from "../components/Banner/Banner";


export default function Home() {
    return (
        <div>
            <Banner/>
            <section className="view-border h-full lg:flex justify-between">
                <NavLink to='/find_bus_route/'>
                    <div className="home-btn">
                        <img src={bus_c1} alt='公車圖案' />
                        <span className="c1 ml-2">尋找路線</span>
                    </div>
                </NavLink>
                <NavLink to='/near_by_bus_station/'>
                    <div className="home-btn">
                        <img src={bus_c5} alt='公車圖案' />
                        <span className="c5 ml-2">附近站點</span>
                    </div>
                </NavLink>
                <NavLink to='/find_bus_station/'>
                    <div className="home-btn">
                        <img src={bus_c2} alt='公車圖案' />
                        <span className="c2 ml-2">站點查詢</span>
                    </div>
                </NavLink>
                <NavLink to='/liked_list/'>
                    <div className="home-btn">
                        <img src={bus_c4} alt='公車圖案' />
                        <span className="c4 ml-2">收藏清單</span>
                    </div>
                </NavLink>

            </section>
        </div>
    )
}