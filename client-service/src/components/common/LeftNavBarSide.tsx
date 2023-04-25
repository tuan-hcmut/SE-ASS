import React, { useContext } from "react";

import { Link, useLocation } from "react-router-dom";

import Logo from "./Logo";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AiFillHome } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import AuthContext from "../../context/AuthProvider";
import { BiTask } from "react-icons/bi";
import { FiTruck } from "react-icons/fi";
import { BsPinMap } from "react-icons/bs";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaRoute } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

interface active {
  isActive: boolean;
}

const LeftNavBarSide: React.FC<active> = ({ isActive }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  return (
    <>
      <ToastContainer className={"!text-2xl !font-semibold !text-white"} />
      <div
        className={`pt-4 pl-10 text-color-grey-dark w-[230px] h-screen fixed z-[100] shrink-0 top-0 min-w-937:sticky min-w-937:block hidden transition duration-200 bg-white ${
          isActive && "!block  !w-screen !h-screen !pt-48 pl-[40%] !translate-x-0"
        }`}
      >
        <div className={`mb-28 ${isActive && "hidden"}`}>
          <Logo />
        </div>

        <h2 className="text-xl text-black font-semibold">OVERALL</h2>
        <div className="flex-col-icons ">
          <Link to={"/"} className={`flex-icons relative ${location.pathname === "/" && " !font-semibold !text-black "} `}>
            <AiFillHome className="text-3xl" />
            <h3>Home</h3>
            <div className={`${location.pathname === "/" && !isActive && "w-[3.5px] h-[120%] bg-black absolute right-0 rounded-l-xl"}`}></div>
          </Link>

          <Link
            to={"/vehicles/infor"}
            className={`flex-icons relative ${location.pathname === "/vehicles/infor" && "  !font-semibold !text-black "} `}
          >
            <FiTruck className="text-3xl" />
            <h3>Vehicles</h3>
            <div
              className={`${location.pathname === "/vehicles/infor" && !isActive && "w-[3.5px] h-[120%] bg-black absolute right-0 rounded-l-xl"}`}
            ></div>
          </Link>
          {user.data.role === "BackOfficer" && (
            <>
              <Link to={"/mcps"} className={`flex-icons relative ${location.pathname === "/mcps" && "  !font-semibold !text-black "} `}>
                <BsPinMap className="text-3xl" />
                <h3>MCPs</h3>
                <div className={`${location.pathname === "/mcps" && "w-[3.5px] h-[120%] bg-black absolute right-0 rounded-l-xl"}`}></div>
              </Link>
            </>
          )}
        </div>
        <hr className="border-border-grey-dark border-opacity-50 w-[160px] my-14" />
        <h2 className="text-xl text-black font-semibold mt-9">TASK MANAGERMENT</h2>

        <div className="flex-col-icons">
          <Link
            to={user.data.role === "BackOfficer" ? "/vehicles/assign" : "/task/assigned"}
            className={`flex-icons relative ${location.pathname === "/vehicles/assign" && "  !font-semibold !text-black "} `}
          >
            <BiTask className="text-4xl" />
            <h3>{user.data.role === "BackOfficer" ? "Assign Vehicles" : "Tasks Assigned"}</h3>
            <div
              className={`${
                ["/vehicles/assign", "/vehicles/assign"].includes(location.pathname) && "w-[3.5px] h-[120%] bg-black absolute right-0 rounded-l-xl"
              }`}
            ></div>
          </Link>
          {user.data.role === "BackOfficer" && (
            <>
              <Link to={"/mcps/assign"} className={`flex-icons relative ${location.pathname === "/mcps/assign" && "  !font-semibold !text-black "} `}>
                <HiOutlinePencilSquare className="text-4xl" />
                <h3>Assign MCPs</h3>
                <div className={`${location.pathname === "/mcps/assign" && "w-[3.5px] h-[120%] bg-black absolute right-0 rounded-l-xl"}`}></div>
              </Link>
              <Link
                to={"/route/create"}
                className={`flex-icons relative ${location.pathname === "/route/create" && "  !font-semibold !text-black "} `}
              >
                <FaRoute className="text-3xl" />
                <h3>Create route</h3>
                <div className={`${location.pathname === "/route/create" && "w-[3.5px] h-[120%] bg-black absolute right-0 rounded-l-xl"}`}></div>
              </Link>
            </>
          )}
        </div>
        <hr className="border-border-grey-dark border-opacity-50 w-[160px] my-14" />
        <h2 className="text-xl text-black font-semibold mt-9">SETTING</h2>

        <div className="flex-col-icons">
          <Link to={"/user/userinfor"} className="flex-icons cursor-pointer">
            <CgProfile className="text-3xl" />
            <h3>Profile</h3>
          </Link>
          <Link to={"/"} className="flex-icons">
            <RiErrorWarningLine className="text-4xl" />
            <h3>Help</h3>
          </Link>
          <Link to={`${user.isLogin ? "/logout" : "/login"}`} className="flex-icons">
            <BiLogOut className="text-4xl" />
            {<h3>{user.isLogin ? "Logout" : "Login"}</h3>}
          </Link>
        </div>
      </div>
    </>
  );
};

export default LeftNavBarSide;
