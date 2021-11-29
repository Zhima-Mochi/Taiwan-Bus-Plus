import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import { Pivot as Hamburger } from 'hamburger-react'

export default function Header() {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="relative">
            <div className="header ">
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>

                <div className="flex">
                    <div className="hidden lg:block">
                        <ul className=" bg-white flex justify-between items-center" onClick={() => setOpen(false)}>
                            <li className="mx-4">
                                <NavLink to='/find_bus_route/' className='header-nav-btn'>
                                    尋找路線
                                </NavLink>
                            </li>
                            <li className="mx-4">
                                <NavLink to='/near_by_bus_station/' className='header-nav-btn'>
                                    附近站點
                                </NavLink>
                            </li>
                            <li className="mx-4">
                                <NavLink to='/find_bus_station/' className='header-nav-btn'>
                                    站點查詢
                                </NavLink>
                            </li>
                            <li className="mx-4">
                                <NavLink to='/liked_list/' className='header-nav-btn'>
                                    收藏清單
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:hidden">
                        <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
                    </div>
                </div>
            </div>
            <HamburgerMenu isOpen={isOpen} setOpen={setOpen} />
        </div>
    );
}

function HamburgerMenu({ isOpen, setOpen }) {
    if (isOpen) {
        return (
            <ul className="absolute bg-white shadow-lg top-16 right-0 px-8 z-30 lg:hidden" onClick={() => setOpen(false)}>
                <li className='mt-5 mb-5 '>
                    <NavLink to='/find_bus_route/' className='header-nav-btn'>
                        尋找路線
                    </NavLink>
                </li>
                <li className='mb-5'>
                    <NavLink to='/near_by_bus_station/' className='header-nav-btn'>
                        附近站點
                    </NavLink>
                </li>
                <li className='mb-5'>
                    <NavLink to='/find_bus_station/' className='header-nav-btn'>
                        站點查詢
                    </NavLink>
                </li>
                <li className='mb-5'>
                    <NavLink to='/liked_list/' className='header-nav-btn'>
                        收藏清單
                    </NavLink>
                </li>
            </ul>

        );
    } else {
        return <span></span>;
    }
}
