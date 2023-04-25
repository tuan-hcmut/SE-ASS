import React, { useState } from "react";
import { BiBell } from "react-icons/bi";
import { TiThLarge } from "react-icons/ti";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { quotes } from "../../shared/quotes";
import Notification from "./Notification";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface props {
  mcps?: { lng: number; lat: number; capacity: number }[];
}

const TopHeadBody: React.FC<props> = ({ mcps }) => {
  const tabs = ["Overall"];
  const [tabActive, setTabActive] = useState("Overall");
  const [openNoti, setOpenNoti] = useState(false);

  const handleClick = () => {
    setOpenNoti(!openNoti);
  };

  const handleClose = () => {
    setOpenNoti(!openNoti);
  };

  const handleArr = () => {
    return mcps?.filter((el) => {
      return el.capacity === 100;
    });
  };

  return (
    <>
      <ToastContainer className={"!text-2xl !font-semibold !text-white"} />
      <div className="flex items-center justify-between py-8 sm:px-12 px-6 md:text-2xl text-xl font-light">
        <div className="flex gap-10">
          {tabs.map((tab) => {
            return (
              <h3
                key={tab}
                className={` transition duration-300 cursor-pointer relative ${tabActive === tab && "!font-semibold text-black"}`}
                onClick={() => setTabActive(tab)}
              >
                {tab}
                {tabActive === tab && <div className="h-[4px] w-[100%] bg-black absolute bottom-[-100%] rounded-t-xl"></div>}
              </h3>
            );
          })}
        </div>
        <div className="flex gap-10 text-black">
          <BiBell
            onClick={() => {
              handleClick();
            }}
            className=" hover:scale-125 transition duration-300 text-3xl cursor-pointer"
          />
          <TiThLarge
            onClick={() => {
              toast.success(quotes(), { position: "top-center" });
            }}
            className=" hover:scale-125 transition duration-300 text-3xl cursor-pointer"
          />
        </div>
      </div>
      <hr className="border-border-dark border-opacity-50" />
      <div className={`${openNoti ? "fixed w-[100%] h-[100vh] bg-slate-100 z-[100] top-0 left-0 bg-opacity-70" : "hidden"}`}></div>
      <div
        className={`w-[55rem] h-[35rem] bg-white ${
          openNoti ? "fixed" : "hidden"
        } z-[200] top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-border-dark border-opacity-50 border-[1px]`}
      >
        <div className="w-[100%] h-[4rem] flex justify-center py-3 text-black font-semibold text-2xl border-b-[1px] bg-blue-500 relative">
          <div>Notifications</div>
          <AiOutlineCloseCircle
            className="text-4xl font-medium text-white hover:text-red-700 transition duration-100 cursor-pointer absolute top-[50%] translate-y-[-50%] right-[5px]"
            onClick={() => {
              handleClose();
            }}
          />
        </div>
        <div className="h-[31rem] w-[100%] overflow-y-scroll scrollbar-boxchat border-border-dark border-opacity-50 border-[1px] text-black flex flex-col">
          {mcps &&
            handleArr()?.map((el, index) => {
              return (
                <>
                  {el.capacity === 100 && (
                    <div
                      className={`px-5 py-6 text-2xl font-medium ${index % 2 === 0 ? "bg-white" : "bg-color-grey-light"}`}
                    >{`${index}. The MCPs position at longitude(${el.lng}) latitude(${el.lat})  have been reach ${el.capacity} % capacity !!!. `}</div>
                  )}
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default TopHeadBody;
