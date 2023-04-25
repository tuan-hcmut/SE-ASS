import React, { useState, useContext, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import NavBarForMob from "../../components/common/NavBarForMob";
import LeftNavBarSide from "../../components/common/LeftNavBarSide";
import RightNavBarSide from "../../components/common/RightNavBarSide";
import ScrollButton from "../../components/common/ScrollButton";
import ChatBox from "../../components/common/Chatbox";
import TopHeadBody from "../common/TopHeadBody";
import Footer from "../common/Footer";
import { RiMapPin2Line } from "react-icons/ri";
import { AiOutlineDatabase } from "react-icons/ai";
import GeneralContext from "../../context/generalProvider";

function TaskAssign() {
  const [isActive, setIsActive] = useState(false);
  const { listLocations, setListLocation } = useContext(GeneralContext);

  useEffect(() => {
    const getRandomLogLag = () => {
      const minLag = 10.7;
      const maxLag = 10.9;
      const minLog = 106.62;
      const maxLog = 106.9;
      const arr = [];
      for (var i = 0; i < 1000; i++) {
        const randomLog = (Math.random() * (maxLog - minLog) + minLog).toFixed(6);
        const randomLag = (Math.random() * (maxLag - minLag) + minLag).toFixed(6);
        const randomInt = Math.floor(Math.random() * 100) + 1;
        arr.push({ lng: Number(randomLog), lat: Number(randomLag), capacity: randomInt });
      }

      return arr;
    };

    setListLocation(getRandomLogLag());
  }, []);

  return (
    <>
      <title>Home-Trang chủ</title>
      <div className="relative">
        <NavBarForMob />
        <div className="flex items-start">
          <LeftNavBarSide isActive={isActive} />
          {/*        middle home           */}
          <div className=" bg-color-grey-light grow w-0">
            <TopHeadBody mcps={listLocations} />
            <div className="w-[100%] flex justify-center py-8">
              <Calendar className="!w-[45rem] text-black text-bold text-3xl" />
            </div>
            <div className="py-8 sm:px-12 px-6 text-black">
              <div className="text-2xl font-bold text-green-800 uppercase">Vehicle Assigned</div>
              <div className="w-[100%] flex justify-center text-2xl font-bold italic py-10">Hyundai HD260 20CBM Garbage Truck</div>
              <div className="text-2xl font-bold text-green-800 uppercase">MCPs Assigned</div>
              <div className="w-[100%] flex justify-center text-2xl font-bold italic py-10">
                <div className="flex gap-11">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                      <RiMapPin2Line className="text-3xl" />
                      <div>longitude:</div>
                    </div>
                    <div>10.823099</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                      <RiMapPin2Line className="text-3xl" />
                      <div>Latitude:</div>
                    </div>
                    <div>106.629662</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                      <AiOutlineDatabase className="text-3xl" />
                      <div>Capacity:</div>
                    </div>
                    <div>77%</div>
                  </div>
                </div>
              </div>
              <div className="text-2xl font-bold text-green-800 uppercase">Route Assigned</div>
              <div className="w-[100%] flex justify-center text-2xl font-bold italic py-10"></div>
              <Footer />
            </div>
          </div>

          {/*        RightNavBarSide         */}
          <RightNavBarSide />
        </div>
        <ScrollButton />
        <ChatBox />
      </div>
    </>
  );
}

export default TaskAssign;
