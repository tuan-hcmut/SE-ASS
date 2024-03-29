import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BiLockAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { signIn } from "../services/auth";
import { Link } from "react-router-dom";
import Loading from "../components/common/Loading";

interface Props {
  loading: boolean;
  setLoading: any;
}

const Login: React.FC<Props> = ({ loading, setLoading }) => {
  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
  });

  const setMessage = (type: string, message: string) => {
    if (type === "err") toast.error(message);
    if (type === "success") toast.success(message);
  };

  const handle = (e: any) => {
    setLogInData({ ...logInData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn(logInData);
    res.status === 200 ? (window.location.href = "/") : setMessage("err", res.message);
    setLoading(false);
  };
  return (
    <>
      {loading && <Loading />}
      <title>Login</title>
      <ToastContainer className={"!text-2xl !font-semibold !text-white"} />
      <div className="sky-bg w-screen h-screen">
        <div className="flex justify-center items-center h-screen">
          <form
            className="flex flex-col items-center md:w-[50rem] w-[35rem] md:h-[65rem] h-[55rem] bg-color-filter z-30 bg-opacity-50 rounded-lg p-10"
            onSubmit={handleSubmit}
          >
            <h1 className=" text-blue-600 md:text-7xl text-5xl font-bold text-center">Log In</h1>
            <div className="flex flex-col gap-6 items-center my-12">
              <h3 className="font-semibold text-2xl text-white">Login with: </h3>

              <div className="flex gap-10">
                <a href={`${process.env.REACT_APP_BASE_URL}/api/users/auth/google`}>
                  <div className="p-6 bg-white rounded-full cursor-pointer ">
                    <FcGoogle className="text-4xl" />
                  </div>
                </a>
                <div
                  onClick={() => {
                    toast.error("Login with github is updating, you can login with google instead!!");
                  }}
                  className="p-6 bg-white rounded-full cursor-pointer text-4xl"
                >
                  <BsGithub className=" text-black" />
                </div>

                <div
                  onClick={() => {
                    toast.error("Login with facebook is updating, you can login with google instead!!");
                  }}
                  className="p-6 bg-white rounded-full cursor-pointer text-4xl"
                >
                  <FaFacebookF className=" text-blue-700" />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:gap-10 gap-7 my-4">
              <div className="flex flex-col gap-5">
                <label className="font-semibold text-xl text-white" htmlFor="email">
                  Email
                </label>

                <div className="relative text-2xl font-normal">
                  <input
                    autoComplete="off"
                    autoFocus
                    value={logInData.email}
                    name="email"
                    minLength={1}
                    maxLength={40}
                    onChange={handle}
                    type={"text"}
                    placeholder="example@gmail.com"
                    id="email"
                    required
                    className="md:w-[40rem] w-[30rem]  py-6 pl-20 rounded-lg bg-color-filter bg-opacity-80"
                  />
                  <AiOutlineMail className="absolute top-[50%] left-0 !text-4xl translate-y-[-50%] text-white ml-4" />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <label className="font-semibold text-xl text-white" htmlFor="password">
                  Password
                </label>
                <div className="relative text-2xl font-normal">
                  <input
                    type={"password"}
                    name="password"
                    value={logInData.password}
                    minLength={1}
                    maxLength={40}
                    onChange={handle}
                    id="password"
                    required
                    className="md:w-[40rem] w-[30rem] py-6 pl-20 rounded-lg bg-color-filter bg-opacity-80"
                    placeholder="•••••••"
                  />
                  <BiLockAlt className="absolute top-[50%] left-0 !text-4xl translate-y-[-50%] text-white ml-4" />
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="font-medium text-white text-3xl bg-color-blue hover:bg-color-blue-darker py-4 px-10 rounded mt-10 transiton duration-200"
            >
              Log In
            </button>
            <Link to={"/signup"} className="font-semibold text-2xl text-blue-500 underline mt-10">
              Create new acccount ???
            </Link>
          </form>
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

export default Login;
