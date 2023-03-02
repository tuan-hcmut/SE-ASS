import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BiChevronDown, BiLogOut } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import AuthContext from "../../context/AuthProvider";

const RightNavBarSide: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="shrink-0 py-6 px-12 w-[350px] md:sticky top-0 xl:block hidden bg-white h-screen">
        <div className="flex items-center justify-between cursor-pointer relative group pb-4" onClick={() => user.isLogin && navigate("/login")}>
          <div className="flex items-center gap-4">
            <img src={`logo.png`} alt="user-img" className="w-[4.8rem] h-[4.5rem] rounded-full   shrink-0" />
            <div className="flex flex-col gap-0 grow ">
              <h2 className="text-2xl font-extrabold text-black uppercase overflow-hidden text-ellipsis whitespace-nowrap w-[17rem]">
                {"Anonymous"}
              </h2>
              <h3 className="text-xl text-color-dark font-light overflow-hidden text-ellipsis whitespace-nowrap w-[17rem] ">
                {`${user.isLogin ? user.data.email : "Anonymous@gmail.com"}`}
              </h3>
            </div>
          </div>
          <BiChevronDown className="text-5xl text-black shrink-0" />
        </div>

        <form className="mt-10 mb-12 relative">
          <input
            type={"text"}
            placeholder="Search Everything..."
            maxLength={40}
            minLength={1}
            className="w-[100%] h-[4.7rem] rounded-full pl-[6rem]  bg-zinc-800 text-xl font-light text-black"
          />

          <BsSearch className="absolute top-[50%] translate-y-[-50%] left-10 text-4xl font-semibold text-white" />
        </form>

        <h2 className="text-xl font-medium text-black uppercase mb-6">User Online</h2>
      </div>
    </>
  );
};

export default RightNavBarSide;
