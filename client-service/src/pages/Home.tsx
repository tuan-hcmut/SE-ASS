import React, { useState, useContext } from "react";

import NavBarForMob from "../components/common/NavBarForMob";
import LeftNavBarSide from "../components/common/LeftNavBarSide";
import RightNavBarSide from "../components/common/RightNavBarSide";
import ScrollButton from "../components/common/ScrollButton";
import BackofficerHomeBody from "../components/backofficer/BackofficerHomeBody";
import AuthContext from "../context/AuthProvider";
import ChatBox from "../components/common/Chatbox";
import { UserPayload } from "../shared/variables";

const Home: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [userChat, setUserChat] = useState<UserPayload>();

  const { user } = useContext(AuthContext);

  return (
    <>
      <title>Home-Trang chủ</title>
      <div className="relative">
        <NavBarForMob />
        <div className="flex items-start">
          <LeftNavBarSide isActive={isActive} />
          {/*        middle home           */}
          <div className=" bg-color-grey-light grow w-0">
            <BackofficerHomeBody />
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

export default Home;
