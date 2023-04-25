import React, { useState, useContext } from "react";

import NavBarForMob from "../components/common/NavBarForMob";
import LeftNavBarSide from "../components/common/LeftNavBarSide";
import RightNavBarSide from "../components/common/RightNavBarSide";
import ScrollButton from "../components/common/ScrollButton";
import AssignVehiclesInfor from "../components/common/AssignVehiclesInfor";
import ChatBox from "../components/common/Chatbox";

const AssignVehicle: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <title>Home-Trang chủ</title>
      <div className="relative">
        <NavBarForMob />
        <div className="flex items-start">
          <LeftNavBarSide isActive={isActive} />
          {/*        middle home           */}
          <div className=" bg-color-grey-light grow w-0">
            <AssignVehiclesInfor />
          </div>

          {/*        RightNavBarSide         */}
          <RightNavBarSide />
        </div>
        <ScrollButton />
        <ChatBox />
      </div>
    </>
  );
};

export default AssignVehicle;
