import React, { useState, useContext, useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import NavBarForMob from "../components/common/NavBarForMob";
import LeftNavBarSide from "../components/common/LeftNavBarSide";
import RightNavBarSide from "../components/common/RightNavBarSide";
import ScrollButton from "../components/common/ScrollButton";
import TopHeadBody from "../components/common/TopHeadBody";
import { BiMapAlt } from "react-icons/bi";
import Loading from "../components/common/Loading";
import Footer from "../components/common/Footer";
import { RiMapPin2Line } from "react-icons/ri";
import { AiOutlineDatabase } from "react-icons/ai";
import ChatBox from "../components/common/Chatbox";
import GeneralContext from "../context/generalProvider";

const MCPs: React.FC = () => {
  const { listLocations, setListLocation } = useContext(GeneralContext);

  const [isActive, setIsActive] = useState(false);
  const [location, setLocation] = useState({
    lat: 10.823099,
    lng: 106.629662,
  });

  const [longitude, setLongitude] = useState<number>();
  const [latitude, setLatitude] = useState<number>();

  const [timeLeft, setTimeLeft] = useState<number>(15 * 60 * 1000);

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB_SSkLkLO1u5QGNl_4kUDERkvC1GtKBAI",
  });

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(location);
    map.fitBounds(bounds);
  }, []);

  useEffect(() => {
    const getRandomLogLag = () => {
      const minLag = 10.7;
      const maxLag = 10.9;
      const minLog = 106.62;
      const maxLog = 106.9;
      const arr = [];
      for (var i = 0; i < 1000; i++) {
        const randomLog = (Math.random() * (maxLog - minLog) + minLog).toFixed(6);
        const randomLag = (Math.random() * (maxLag - minLag) + minLag).toFixed(6);
        const randomInt = Math.floor(Math.random() * 100) + 1;
        arr.push({ lng: Number(randomLog), lat: Number(randomLag), capacity: randomInt });
      }

      return arr;
    };

    const interval = setInterval(() => {
      if (timeLeft <= 0) {
        setTimeLeft(15 * 60 * 1000);
        setListLocation(getRandomLogLag());
      } else setTimeLeft((prevTimeLeft) => prevTimeLeft - 1000);
    }, 1000);

    setListLocation(getRandomLogLag());

    return () => clearInterval(interval);
  }, []);

  const handleOnchange = (e: any) => {
    e.target.name === "lng" ? setLongitude(e.target.value) : setLatitude(e.target.value);
  };

  const handleSearch = () => {
    console.log(Number(latitude), Number(longitude));
    setLocation({ lat: Number(latitude) || 1, lng: Number(longitude) || 1 });
  };

  return (
    <>
      <title>Home-Trang chủ</title>
      <div className="relative">
        <NavBarForMob />
        <div className="flex items-start">
          <LeftNavBarSide isActive={isActive} />
          {/*        middle home           */}
          <div className=" bg-color-grey-light grow w-0">
            <TopHeadBody mcps={listLocations} />
            <div className="sm:px-12 px-6 py-8">
              {isLoaded ? (
                <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={-10} onLoad={onLoad}>
                  {/* Child components, such as markers, info windows, etc. */}
                  <></>
                </GoogleMap>
              ) : (
                <></>
              )}

              <div className="flex justify-center my-7">
                <div className="text-black">
                  <div className="flex gap-3 items-center mb-5 justify-between">
                    <BiMapAlt className="text-3xl" />
                    <label htmlFor="lng" className="text-2xl font-semibold">
                      Longitude:{" "}
                    </label>
                    <input
                      name="lng"
                      id="lng"
                      className="w-[35rem] h-[4rem] border-zinc-500 px-6 rounded box-shadow-custom text-2xl font-medium"
                      type={"text"}
                      value={longitude}
                      onChange={handleOnchange}
                      min={1}
                      max={9}
                      required
                    />
                  </div>
                  <div className="flex gap-3 items-center justify-between">
                    <BiMapAlt className="text-3xl" />
                    <label htmlFor="lag" className="text-2xl font-semibold">
                      Latitude:{" "}
                    </label>
                    <input
                      name="lag"
                      id="lag"
                      className="w-[35rem] h-[4rem] border-zinc-500 px-6 rounded box-shadow-custom text-2xl font-medium"
                      type={"text"}
                      value={latitude}
                      onChange={handleOnchange}
                      min={1}
                      max={9}
                      required
                    />
                  </div>
                  <div className="w-[100%] flex justify-center">
                    <button
                      onClick={() => {
                        handleSearch();
                      }}
                      className="font-medium text-white text-3xl bg-color-blue hover:bg-color-blue-darker py-4 px-10 rounded mt-10 transiton duration-200"
                    >
                      Seach
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-2xl font-semibold w-[100] flex justify-end mb-[1rem] text-black">
                <div className="flex gap-3 items-center">
                  <div>Update In:</div>
                  <div className="flex items-end">
                    <div className="text-4xl">{Math.floor((timeLeft / (1000 * 60 * 60)) % 24)}</div>
                    <div className=" font-light">Hour</div>
                  </div>
                  <div className="flex items-end">
                    <div className="text-4xl">{Math.floor((timeLeft / 1000 / 60) % 60)}</div>
                    <div className="font-light">Minute</div>
                  </div>
                  <div className="flex items-end">
                    <div className="text-4xl">{Math.floor((timeLeft / 1000) % 60)}</div>
                    <div className="font-light">Second</div>
                  </div>
                </div>
              </div>
              <div className="w-[100%] h-[50rem] overflow-y-scroll scrollbar box-shadow-custom rounded text-black">
                {listLocations ? (
                  listLocations.map((el, index) => {
                    return (
                      <div
                        key={index}
                        className={`h-[5rem] ${index % 2 === 0 ? "bg-white" : "bg-color-grey-light"} flex justify-between items-center px-2`}
                      >
                        <div className="flex gap-[7rem] items-center">
                          <div className="text-xl">{index}</div>
                          <div className="flex items-center text-2xl text-yellow-600 gap-2">
                            <RiMapPin2Line className="text-3xl" />
                            <div>Longitude: {el.lng}</div>
                          </div>
                          <div className="flex items-center text-2xl text-blue-600 gap-2">
                            <RiMapPin2Line className="text-3xl" />
                            <div>Latitude: {el.lat}</div>
                          </div>
                        </div>
                        <div className={`flex items-center text-2xl ${el.capacity < 50 ? "text-green-600" : "text-red-600"}`}>
                          <AiOutlineDatabase className="text-3xl " />
                          <div>Capacity: {el.capacity}%</div>
                        </div>
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
          </div>

          {/*        RightNavBarSide         */}
          <RightNavBarSide />
        </div>
        <ChatBox />
        <ScrollButton />
      </div>
    </>
  );
};
export default MCPs;
