import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { BiChevronDown } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

import AuthContext from "../../context/AuthProvider";

const RightNavBarSide: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="shrink-0 py-6 pr-12 pl-2 w-[350px] md:sticky top-0 xl:block hidden bg-white h-screen">
        <div
          className="flex items-center justify-between cursor-pointer relative group pb-4"
          onClick={() => (!user.isLogin ? navigate("/login") : navigate("/user/userinfor"))}
        >
          <div className="flex items-center gap-4">
            <img
              src={`https://uwc-bucket.s3.ap-southeast-1.amazonaws.com/${
                user.data.photo ? user.data.photo : "640f3f4a676e2fa7c7bfb3c0/user-default/logo.png"
              }`}
              alt="user-img"
              className="w-[4.8rem] h-[4.5rem] rounded-full   shrink-0"
            />
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
        <div>
          <h2 className="text-xl font-semibold text-black uppercase mb-6">User Online</h2>
          <div className="flex flex-col gap-5 h-[57rem] scrollbar overflow-y-scroll overflow-x-hidden">
            {[
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
              { fullName: "test123", email: "test@gmail.com" },
            ].map((el, index) => {
              return (
                <div className="flex gap-3 items-center cursor-pointer hover:bg-color-grey-light transition duration-200 pl-[1rem] py-[3px] ">
                  <div className="relative">
                    <img
                      className="w-[4rem] h-[4rem] rounded-full   shrink-0"
                      src="https://uwc-bucket.s3.ap-southeast-1.amazonaws.com/640f3f4a676e2fa7c7bfb3c0/user-default/logo.png"
                      alt="user"
                    />
                    <div className="absolute w-[1rem] h-[1rem] rounded-full bg-green-600 bottom-[-3px] right-[-3px]"></div>
                  </div>
                  <div className="text-black text-2xl font-semibold">{el.fullName}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RightNavBarSide;
