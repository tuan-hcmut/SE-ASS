import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import validator from "validator";

import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";

import { signUp } from "../services/auth";
import Loading from "../components/common/Loading";

interface Props {
  loading: boolean;
  setLoading: any;
}
const Signup: React.FC<Props> = ({ loading, setLoading }) => {
  const [signUpData, setSignUpData] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const setMessage = (type: string, message: string) => {
    if (type === "err") toast.error(message);
    if (type === "success") toast.success(message);
  };

  const handle = (e: any) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (validator.isEmail(signUpData.email)) {
        if (signUpData.password === signUpData.passwordConfirm) {
          // console.log(signUpData);
          const res = await signUp(signUpData);
          res.status === 201 ? (window.location.href = "/") : setMessage("err", res.message);
          setSignUpData({
            fullName: "",
            email: "",
            password: "",
            passwordConfirm: "",
          });
        } else {
          setMessage("err", "Password and password Confirm are not the same!!!");
        }
      } else {
        setMessage("err", "Invalid Email!!!");
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <>
      {loading && <Loading />}
      <title>Sign Up</title>
      <ToastContainer className={"!text-2xl !font-semibold !text-white"} />
      <div className="sky-bg w-screen h-screen">
        <div className="flex justify-center items-center h-screen">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center md:w-[50rem] w-[35rem] md:h-[65rem] h-[63rem] bg-color-filter z-30 bg-opacity-50 rounded-lg p-10"
          >
            <h1 className=" text-blue-600 md:text-7xl text-5xl font-bold text-center mb-10">Sign Up</h1>

            <div className="flex flex-col gap-10 my-4">
              <div className="flex gap-8">
                <div className="flex flex-col gap-5">
                  <label className="font-semibold text-xl text-white" htmlFor="fullName">
                    Full Name
                  </label>
                  <div className="relative text-2xl font-normal">
                    <input
                      type={"text"}
                      name="fullName"
                      value={signUpData.fullName}
                      minLength={1}
                      maxLength={40}
                      onChange={handle}
                      id="fullName"
                      className="md:w-[40rem] w-[32rem] py-6 pl-20 rounded-lg bg-color-filter bg-opacity-80"
                      placeholder="your full name..."
                      required
                    />
                    <AiOutlineUser className="absolute top-[50%] left-0 !text-4xl translate-y-[-50%] text-white ml-4" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <label className="font-semibold text-xl text-white" htmlFor="email">
                  Email
                </label>

                <div className="relative text-2xl font-normal">
                  <input
                    autoComplete="off"
                    autoFocus
                    value={signUpData.email}
                    name="email"
                    minLength={1}
                    maxLength={40}
                    onChange={handle}
                    type={"text"}
                    placeholder="example@gmail.com"
                    id="email"
                    className="md:w-[40rem] w-[32rem]  py-6 pl-20 rounded-lg bg-color-filter bg-opacity-80"
                    required
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
                    value={signUpData.password}
                    minLength={1}
                    maxLength={40}
                    onChange={handle}
                    id="password"
                    className="md:w-[40rem] w-[32rem] py-6 pl-20 rounded-lg bg-color-filter bg-opacity-80"
                    placeholder="••••••••"
                    required
                  />
                  <BiLockAlt className="absolute top-[50%] left-0 !text-4xl translate-y-[-50%] text-white ml-4" />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <label className="font-semibold text-xl text-white" htmlFor="passwordConfirm">
                  Password Confirm
                </label>
                <div className="relative text-2xl font-normal">
                  <input
                    type={"password"}
                    name="passwordConfirm"
                    value={signUpData.passwordConfirm}
                    minLength={1}
                    maxLength={40}
                    onChange={handle}
                    id="passwordConfirm"
                    className="md:w-[40rem] w-[32rem] py-6 pl-20 rounded-lg bg-color-filter bg-opacity-80"
                    placeholder="••••••••"
                    required
                  />
                  <BiLockAlt className="absolute top-[50%] left-0 !text-4xl translate-y-[-50%] text-white ml-4" />
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="font-medium text-white text-3xl bg-color-blue hover:bg-color-blue-darker py-4 px-10 rounded mt-6  transiton duration-200"
            >
              Sign Up
            </button>
            <Link to={"/login"} className="font-semibold text-2xl text-blue-500 underline mt-10">
              Already an account!!!
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

export default Signup;
