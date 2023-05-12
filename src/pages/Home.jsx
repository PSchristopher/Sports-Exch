import { useEffect, useState } from "react";
import { MainNavbar } from "../components/MainNavbar";
import { MobileNavbar } from "../components/MobileNavbar";
import { RightNavbar } from "../components/RightNavbar";
import { SideNavbar } from "../components/SideNavbar";

export const Home = () => {
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

  console.log(toggle, "hiuhuuu");
  return (
    <div className="bg-black h-[100vh] overflow-hidden">
      <div className="mx-auto">
        {<MainNavbar setToggle={setToggle} toggle={toggle} />}
      </div>
      <div className="container mx-auto px-6 md:max-w-full md:mx-0 mt-3">
        <div className="px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            {toggle ? (
              <div className="h-[90vh] overflow-y-scroll">
                <SideNavbar />
              </div>
            ) : null}
            <div>content</div>
            <div className="">
              <RightNavbar />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 md:hidden ">
        <MobileNavbar />
      </div>
    </div>
  );
};
