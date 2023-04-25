import React, { useState, useContext } from "react";

import NavBarForMob from "../components/common/NavBarForMob";
import LeftNavBarSide from "../components/common/LeftNavBarSide";
import RightNavBarSide from "../components/common/RightNavBarSide";
import ScrollButton from "../components/common/ScrollButton";
import ChatBox from "../components/common/Chatbox";
import AssignRouteInfor from "../components/common/AssignRouteInfor";

const AssignRoute: React.FC = () => {
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
            <AssignRouteInfor />
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

export default AssignRoute;
