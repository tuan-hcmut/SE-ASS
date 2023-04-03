import React, { useEffect, useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopHeadBody from "../common/TopHeadBody";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { GiMineTruck } from "react-icons/gi";
import { BsMinecartLoaded } from "react-icons/bs";
import { fakeUsers, UserPayload } from "../../shared/variables";
import { MdOutlineDone } from "react-icons/md";
import { IoIosCodeWorking } from "react-icons/io";
import { MdOutlineEventBusy } from "react-icons/md";
import GeneralContext from "../../context/generalProvider";
import Footer from "../common/Footer";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 10.823099,
  lng: 106.629662,
};

const BackofficerHomeBody: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB_SSkLkLO1u5QGNl_4kUDERkvC1GtKBAI",
  });
  const { setUserChat } = useContext(GeneralContext);

  const collectors = fakeUsers.filter((el) => el.role === "Collector");
  const janitors = fakeUsers.filter((el) => el.role === "Janitor");

  const handleClickUser = (user: UserPayload) => {
    // lafm sao khi tab vao user thi chatbox phai refresh ???
    setUserChat(user);
  };

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
  }, []);

  return (
    <>
      <TopHeadBody />
      <div className="sm:px-12 px-6 py-8">
        {isLoaded ? (
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={2} onLoad={onLoad}>
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        ) : (
          <></>
        )}

        <div className="flex gap-8 w-[100%] my-16">
          {/* collectors */}
          <div className="w-[50%] box-shadow-custom">
            <div className="flex items-center rounded-md underline justify-center gap-2 mb-4 text-3xl font-medium text-green-800">
              <GiMineTruck className="text-4xl" />
              <div>Collectors</div>
            </div>
            <div className="w-[100%] h-[30rem] bg-white overflow-y-scroll scrollbarv2 flex flex-col">
              {collectors.map((el: UserPayload, index: number) => {
                return (
                  <div
                    className="flex justify-between cursor-pointer rounded-md hover:bg-color-grey-light px-8 py-4 transition duration-200"
                    onClick={() => {
                      handleClickUser(el);
                    }}
                  >
                    <div className="flex gap-3 items-center">
                      <div className="relative">
                        <img
                          className="w-[4rem] h-[4rem] rounded-full object-cover shrink-0"
                          src={`https://uwc-bucket.s3.ap-southeast-1.amazonaws.com/${el.photo}`}
                          alt="user"
                        />
                        <div className="absolute w-[1rem] h-[1rem] rounded-full bg-green-600 bottom-[-1px] right-[0px]"></div>
                      </div>
                      <div className="text-2xl text-black font-medium">{el.fullName}</div>
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
                );
              })}
            </div>
          </div>
          {/* janitors */}
          <div className="w-[50%] box-shadow-custom">
            <div className="flex items-center rounded-md underline justify-center gap-2 mb-4 text-3xl font-medium text-yellow-700">
              <BsMinecartLoaded className="text-4xl " color="#a16207" />
              <div>Janitors</div>
            </div>
            <div className="w-[100%] h-[30rem] bg-white">
              {janitors.map((el: UserPayload, index: number) => {
                return (
                  <div
                    className="flex justify-between cursor-pointer rounded-md hover:bg-color-grey-light px-8 py-4 transition duration-200"
                    onClick={() => {
                      handleClickUser(el);
                    }}
                  >
                    <div className="flex gap-3 items-center">
                      <div className="relative">
                        <img
                          className="w-[4rem] h-[4rem] rounded-full object-cover shrink-0"
                          src={`https://uwc-bucket.s3.ap-southeast-1.amazonaws.com/${el.photo}`}
                          alt="user"
                        />
                        <div className="absolute w-[1rem] h-[1rem] rounded-full bg-green-600 bottom-[-1px] right-[0px]"></div>
                      </div>
                      <div className="text-2xl text-black font-medium">{el.fullName}</div>
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
                );
              })}
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="!text-black sm:px-12 px-6 py-8">
        <Footer />
      </div>
    </>
  );
};

export default BackofficerHomeBody;
