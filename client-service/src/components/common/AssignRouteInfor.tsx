import React, { useContext, useEffect, useState } from "react";
import { fakeUsers } from "../../shared/variables";
import Loading from "./Loading";
import Footer from "./Footer";
import TopHeadBody from "./TopHeadBody";
import { MdOutlineDone } from "react-icons/md";
import { IoIosCodeWorking } from "react-icons/io";
import { MdOutlineEventBusy } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AssignRouteInfor: React.FC = () => {
  const [listUsers, setListUsers] = useState(fakeUsers);

  const handleAssignClick = (status: string | undefined, isCreate: boolean | undefined, index: number) => {
    if (status !== "Ready") {
      toast.error("Opps!! This person is worrking");
      return;
    }
    if (!isCreate) {
      const temp = [...fakeUsers];
      fakeUsers[index].isCreate = true;
      temp[index].isCreate = true;
      setListUsers(temp);
      return;
    }

    const temp1 = [...fakeUsers];
    temp1[index].status = "Working";
    setListUsers(temp1);
  };

  return (
    <>
      <ToastContainer className={"!text-2xl !font-semibold !text-white"} />
      <TopHeadBody />
      <div className="sm:px-12 px-6 py-8">
        <div className="box-shadow-custom rounded text-black">
          {listUsers ? (
            listUsers.map((el, index) => {
              return (
                <div
                  key={index}
                  className={`h-[5rem] ${index % 2 === 0 ? "bg-white" : "bg-color-grey-light"} flex justify-between items-center px-2 py-3`}
                >
                  <div className="flex gap-[3rem] items-center w-[35%]">
                    <div className="text-xl">{index}</div>
                    <div className="flex justify-between w-[90%]">
                      <div className="flex gap-3 items-center pl-[1rem] py-[2.75rem]">
                        <img className="w-[4rem] h-[4rem] rounded-full object-cover shrink-0" src={`/${el.photo}`} alt="user" />
                        <div className="text-black text-2xl font-semibold">{el.fullName}</div>
                      </div>
                      <div className="flex gap-1 items-center">
                        <div
                          className={` text-3xl font-medium ${
                            el.status === "Working" ? "text-blue-700" : el.status === "Busy" ? "text-red-700" : "text-green-700"
                          }`}
                        >
                          {el.status === "Working" ? <IoIosCodeWorking /> : el.status === "Busy" ? <MdOutlineEventBusy /> : <MdOutlineDone />}
                        </div>
                        <div
                          className={`text-2xl ${
                            el.status === "Working" ? "text-blue-700" : el.status === "Busy" ? "text-red-700" : "text-green-700"
                          } font-medium`}
                        >
                          {el.status}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 text-2xl font-semibold items-center">
                    <div>Start address: </div>
                    <input type="text" className="w-[8rem] h-[3rem] px-4 border-gray-200 border-[1px]" />
                  </div>
                  <div className="flex gap-2 text-2xl font-semibold items-center">
                    <div>End address: </div>
                    <input type="text" className="w-[8rem] h-[3rem] px-4 border-gray-200 border-[1px]" />
                  </div>
                  <div className="text-2xl font-semibold text-blue-700">{el.isCreate && `${el.distance}`}</div>
                  <button
                    onClick={() => {
                      handleAssignClick(el.status, el.isCreate, index);
                    }}
                    className={`font-medium ${
                      el.status !== "Ready" ? "text-color-disable bg-bg-disable " : "text-white bg-color-blue hover:bg-color-blue-darker"
                    } text-2xl  py-2 px-8 rounded transiton duration-200`}
                  >
                    {el.isCreate ? "Assign" : "Create"}
                  </button>
                </div>
              );
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <div className="!text-black sm:px-12 px-6 py-8">
        <Footer />
      </div>
    </>
  );
};

export default AssignRouteInfor;
