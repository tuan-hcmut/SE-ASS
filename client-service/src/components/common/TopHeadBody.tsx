import React, { useState } from "react";
import { BiBell } from "react-icons/bi";
import { TiThLarge } from "react-icons/ti";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { quotes } from "../../shared/quotes";

const TopHeadBody: React.FC = () => {
  const tabs = ["Overall"];
  const [tabActive, setTabActive] = useState("Overall");

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
        <div className="flex gap-10">
          <BiBell
            onClick={() => {
              toast.success(quotes(), { position: "top-center" });
            }}
            className="hover:text-black hover:scale-125 transition duration-300 text-3xl cursor-pointer"
          />
          <TiThLarge className="hover:text-black hover:scale-125 transition duration-300 text-3xl cursor-pointer" />
        </div>
      </div>
      <hr className="border-border-dark border-opacity-50" />
    </>
  );
};

export default TopHeadBody;
