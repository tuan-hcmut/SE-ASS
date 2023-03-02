import React, { useContext } from "react";

import { Link, useLocation } from "react-router-dom";

import Logo from "./Logo";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaRegCompass } from "react-icons/fa";
import { AiFillHome, AiFillClockCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import { MdOutlineLogin } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import AuthContext from "../../context/AuthProvider";

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
        className={`pt-8 pl-10 w-[230px] h-screen fixed z-[100] shrink-0 top-0 min-w-937:sticky min-w-937:block hidden transition duration-200 bg-white ${
          isActive && "!block  !w-screen !h-screen !pt-48 pl-[40%] !translate-x-0"
        }`}
      >
        <div className={`mb-28 ${isActive && "hidden"}`}>
          <Logo />
        </div>

        <h2 className="text-xl text-black">MENU</h2>
        <div className="flex-col-icons ">
          <Link to={"/"} className={`flex-icons relative ${location.pathname === "/" && " !font-semibold !text-black "} `}>
            <AiFillHome className="text-3xl" />
            <h3>Home</h3>
            <div className={`${location.pathname === "/" && !isActive && "w-[3.5px] h-[120%] bg-black absolute right-0 rounded-l-xl"}`}></div>
          </Link>

          <Link to={"/discovery"} className={`flex-icons relative ${location.pathname === "/discovery" && "  !font-semibold !text-black "} `}>
            <FaRegCompass className="text-3xl" />
            <h3>Discovery</h3>
          </Link>

          <Link to={"/search"} className={`flex-icons relative ${location.pathname === "/search" && "  !font-semibold !text-black "} `}>
            <BsSearch className="text-3xl" />
            <h3>Search</h3>
            <div className={`${location.pathname === "/search" && "w-[3.5px] h-[120%] bg-black absolute right-0 rounded-l-xl"}`}></div>
          </Link>
        </div>
        <hr className="border-border-grey-dark border-opacity-50 w-[160px] my-14" />
        <h2 className="text-xl text-black mt-9">LIBRARY</h2>

        <div className="flex-col-icons">
          <Link to={"/bookmark"} className={`flex-icons relative ${location.pathname === "/bookmark" && "  !font-semibold !text-black "} `}>
            <BsFillBookmarkCheckFill className="text-3xl" />
            <h3>Bookmarked</h3>
            <div className={`${location.pathname === "/bookmark" && "w-[3.5px] h-[120%] bg-black absolute right-0 rounded-l-xl"}`}></div>
          </Link>

          <Link to={"/recent"} className={`flex-icons relative ${location.pathname === "/recent" && "  !font-semibold !text-black "} `}>
            <AiFillClockCircle className="text-3xl" />
            <h3>Recent</h3>
            <div className={`${location.pathname === "/recent" && "w-[3.5px] h-[120%] bg-black absolute right-0 rounded-l-xl"}`}></div>
          </Link>
        </div>
        <hr className="border-border-grey-dark border-opacity-50 w-[160px] my-14" />
        <h2 className="text-xl text-black mt-9">GENERAL</h2>

        <div className="flex-col-icons">
          <Link to={`${user.isLogin ? "/logout" : "/login"}`} className="flex-icons">
            <MdOutlineLogin className="text-3xl" />
            {<h3>{user.isLogin ? "Logout" : "Login"}</h3>}
          </Link>

          <div
            onClick={() => {
              toast.error("This feature is updating!!");
            }}
            className="flex-icons cursor-pointer"
          >
            <FiSettings />
            <h3>Settings</h3>
          </div>

          <Link to={"/"} className="flex-icons">
            <RiErrorWarningLine className="text-3xl" />
            <h3>Help</h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LeftNavBarSide;
