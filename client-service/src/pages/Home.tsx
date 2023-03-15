import React, { useState, useContext } from "react";

import NavBarForMob from "../components/common/NavBarForMob";
import LeftNavBarSide from "../components/common/LeftNavBarSide";
import RightNavBarSide from "../components/common/RightNavBarSide";
import ScrollButton from "../components/common/ScrollButton";
import BackofficerHomeBody from "../components/backofficer/BackofficerHomeBody";
import AuthContext from "../context/AuthProvider";

const Home: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const { user } = useContext(AuthContext);

  if (!user.isLogin) window.location.href = "/login";

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
      </div>
    </>
  );
};

export default Home;
