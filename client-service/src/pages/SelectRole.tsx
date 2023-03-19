import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loading from "../components/common/Loading";
import AuthContext from "../context/AuthProvider";
import { GiMineTruck } from "react-icons/gi";
import { BsMinecartLoaded } from "react-icons/bs";
import { updateUserRole } from "../services/auth";

interface Props {
  loading: boolean;
  setLoading: any;
}

const SelectRole: React.FC<Props> = ({ loading, setLoading }) => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [role, setRole] = useState(null);
  const handleData = (e: any) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!role) toast.error("Please, select your role !!!");
    else {
      setLoading(true);
      const res = await updateUserRole(user.data.email === "admin@gmail.com" ? "BackOfficer" : role);
      res.status === 201 ? (window.location.href = "/") : toast.error(res.message);
      setLoading(false);
    }
  };
  return (
    <>
      <ToastContainer className={"!text-2xl !font-semibold !text-white"} />
      <div className="sky-bg w-screen h-screen">
        <div className="w-[100%] h-[100%] flex justify-center pt-[10%]">
          <div className="bg-white w-[55rem] h-[30rem] z-10">
            <div className="w-[100%] h-[100%] flex items-center flex-col gap-28 pt-[5%] ">
              <div className="text-4xl font-semibold uppercase bg-text-color">Select your role</div>
              <form onSubmit={handleSubmit}>
                <div className="text-4xl font-semibold flex gap-20">
                  {["Collector", "Janitor"].map((el, index) => (
                    <div key={index} className={`flex items-center gap-4 cursor-pointer ${index === 0 ? "text-green-800" : "text-yellow-700"}`}>
                      <label className="flex items-center gap-3" htmlFor={`${el}`}>
                        {el} {index === 0 ? <GiMineTruck /> : <BsMinecartLoaded color="#a16207" />}:
                      </label>
                      <input
                        className="w-[2rem] h-[2rem]"
                        id={`${el}`}
                        value={`${el}`}
                        type={"checkbox"}
                        checked={role === el}
                        name="role"
                        onChange={handleData}
                      />
                    </div>
                  ))}
                </div>

                <div className="w-[100%] flex justify-center mt-20">
                  <button
                    type="submit"
                    disabled={loading}
                    className="font-medium text-white text-3xl py-4 px-10 rounded bg-color-blue hover:bg-color-blue-darker transiton duration-200"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="sun"></div>
        <div className="mercury"></div>
        <div className="venus"></div>
        <div className="earth"></div>
        <div className="mars"></div>
        <div className="jupiter"></div>
        <div className="saturn"></div>
        <div className="uranus"></div>
        <div className="neptune"></div>
        <div className="urasteroids-beltanus"></div>
      </div>
    </>
  );
};

export default SelectRole;
