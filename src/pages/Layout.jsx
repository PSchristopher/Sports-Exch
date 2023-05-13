import { useEffect, useState } from "react";
import { MainNavbar } from "../components/MainNavbar";
import { MobileNavbar } from "../components/MobileNavbar";
import { RightNavbar } from "../components/RightNavbar";
import { SideNavbar } from "../components/SideNavbar";
import { Sports } from "../components/Sports";
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    const [toggle, setToggle] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) { // Show on mobile and tablet screens (max-width: 768px)
                setToggle(false);
            } else {
                setToggle(true);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="bg-black h-[100vh] overflow-y-hidden ">
            <div className="mx-auto">
                {<MainNavbar setToggle={setToggle} toggle={toggle} />}
            </div>
            <div className="container mx-auto md:max-w-full md:mx-0 mt-2">
                <div className="p-2 ">
                    <div className="flex justify-betwee">
                        {toggle ? (
                            <div className="h-[90vh] overflow-y-scroll scrollbar-hide bg-black absolute md:relative z-50 w-2/4 max-w-[252px]">
                                <SideNavbar />
                            </div>
                        ) : null}
                        <Outlet />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 md:hidden ">
                <MobileNavbar />
            </div>
        </div>
    );
};
