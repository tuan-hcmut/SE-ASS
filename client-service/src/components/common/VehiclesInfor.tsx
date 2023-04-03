import React, { useEffect, useState } from "react";
import TopHeadBody from "./TopHeadBody";
import { getAll } from "../../services/vehicle";
import { VehiclePayload } from "../../shared/variables";
import Loading from "./Loading";
import { GiWeight } from "react-icons/gi";
import { AiOutlineDatabase } from "react-icons/ai";
import { MdOutlineLocalGasStation } from "react-icons/md";
import Footer from "./Footer";

const VehiclesInfor: React.FC = () => {
  const [vehicles, setVehicles] = useState<VehiclePayload[] | undefined>([]);
  useEffect(() => {
    const getVehicles = async () => {
      const res = await getAll();
      console.log(vehicles);
      setVehicles(res);
    };

    getVehicles();
  }, []);

  return (
    <>
      <TopHeadBody />
      <div className="sm:px-12 px-6 py-8">
        {vehicles ? (
          <div className="flex flex-wrap w-[100%]">
            {vehicles.map((el: VehiclePayload, index) => {
              return (
                <div className="p-[1.5rem] h-[37rem] w-[50%] text-grey-card">
                  <div className="h-[100%] overflow-hidden rounded box-shadow-custom cursor-pointer">
                    <div className="h-[50%] bg-center bg-no-repeat bg-cover brightness-75" style={{ backgroundImage: `url(${el.photo})` }}></div>
                    <div className="h-[50%] bg-green-dark p-[1.25rem]">
                      <div className="text-3xl font-semibold mb-10">{el.type}</div>
                      <div className="text-xl font-medium mb-6">{el.description}</div>
                      <div className=" flex justify-between text-xl font-semibold persudo-custom relative pt-[2rem] text-yellow-600">
                        <div className="flex items-center">
                          <GiWeight className="text-3xl" />
                          <div>Weight: {el.weight}</div>
                        </div>
                        <div className="flex items-center">
                          <AiOutlineDatabase className="text-3xl" />
                          <div>Capacity: {el.capacity}</div>
                        </div>
                        <div className="flex items-center">
                          <MdOutlineLocalGasStation className="text-3xl" />
                          <div>Consume: {el.fuelConsumptions}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <Loading />
        )}
      </div>
      <div className="!text-black sm:px-12 px-6 py-8">
        <Footer />
      </div>
    </>
  );
};

export default VehiclesInfor;
