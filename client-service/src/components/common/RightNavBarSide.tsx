import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BiChevronDown } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

import AuthContext from "../../context/AuthProvider";
import GeneralContext from "../../context/generalProvider";
import Loading from "./Loading";
import { UserPayload, fakeUsers } from "../../shared/variables";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RightNavBarSide: React.FC = () => {
  const { user } = useContext(AuthContext);
  const { setUserChat, listUsers } = useContext(GeneralContext);

  const handleClickUser = (user: UserPayload) => {
    // lafm sao khi tab vao user thi chatbox phai refresh ???
    setUserChat(user);
  };

  return (
    <>
      <ToastContainer className={"!text-2xl !font-semibold !text-white"} />
      <div className="shrink-0 py-6 pr-12 pl-2 w-[350px] md:sticky top-0 xl:block hidden bg-white h-screen">
        <a
          className="flex items-center justify-between cursor-pointer relative group pb-4"
          // onClick={() => (!user.isLogin ? navigate("/login") : navigate("/user/userinfor"))}
          href="/user/userinfor"
        >
          <div className="flex items-center gap-4">
            <img src={`/logo.png`} alt="user-img" className="w-[4.8rem] h-[4.5rem] rounded-full object-cover shrink-0" />
            <div className="flex flex-col gap-0 grow ">
              <h2 className="text-2xl font-extrabold text-black uppercase overflow-hidden text-ellipsis whitespace-nowrap w-[17rem]">
                {user.isLogin ? user.data.fullName : "Anonymous"}
              </h2>
              <h3 className="text-xl text-color-dark font-light overflow-hidden text-ellipsis whitespace-nowrap w-[17rem] ">
                {`${user.isLogin ? user.data.email : "Anonymous@gmail.com"}`}
              </h3>
            </div>
          </div>
          <BiChevronDown className="text-5xl text-black shrink-0" />
        </a>

        <form className="mt-10 mb-12 relative">
          <input
            type={"text"}
            placeholder="Search Everything..."
            maxLength={40}
            minLength={1}
            className="w-[100%] h-[4.7rem] rounded-full pl-[6rem]  bg-zinc-800 text-xl font-light text-white"
          />

          <BsSearch className="absolute top-[50%] translate-y-[-50%] left-10 text-4xl font-semibold text-white" />
        </form>
        <div>
          <h2 className="text-xl font-semibold text-black uppercase mb-6">User Online</h2>
          <div className="flex flex-col gap-5 h-[57rem] scrollbar overflow-y-scroll overflow-x-hidden">
            {listUsers ? (
              <>
                {listUsers.map((el: any, index: number) => {
                  return (
                    <div
                      className="flex gap-3 items-center cursor-pointer hover:bg-color-grey-light transition duration-200 pl-[1rem] py-[3px]"
                      onClick={() => {
                        handleClickUser(el[0]);
                      }}
                    >
                      <div className="relative">
                        <img className="w-[4rem] h-[4rem] rounded-full object-cover shrink-0" src={`/${el[0].photo}`} alt="user" />
                        <div className="absolute w-[1rem] h-[1rem] rounded-full bg-green-600 bottom-[-1px] right-[0px]"></div>
                      </div>
                      <div className="text-black text-2xl font-semibold">{el[0].fullName}</div>
                    </div>
                  );
                })}

                {fakeUsers.map((el: UserPayload, index: number) => {
                  return (
                    <div
                      className="flex gap-3 items-center cursor-pointer hover:bg-color-grey-light transition duration-200 pl-[1rem] py-[3px]"
                      onClick={() => {
                        handleClickUser(el);
                      }}
                    >
                      <div className="relative">
                        <img className="w-[4rem] h-[4rem] rounded-full object-cover shrink-0" src={`/${el.photo}`} alt="user" />
                        <div className="absolute w-[1rem] h-[1rem] rounded-full bg-green-600 bottom-[-1px] right-[0px]"></div>
                      </div>
                      <div className="text-black text-2xl font-semibold">{el.fullName}</div>
                    </div>
                  );
                })}
              </>
            ) : (
              <Loading background="!bg-transparent" position="!relative" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RightNavBarSide;
