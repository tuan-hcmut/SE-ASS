import React from "react";

const Logo: React.FC = () => {
  return (
    <>
      <a href={`${process.env.REACT_APP_URL}`} className=" flex items-center gap-7">
        <img className="w-[7rem] h-[5rem]" src="/logo.png" alt="logo" />
        <div className="typed-animation">
          <h1 className="typed-out bg-text-color sm:text-4xl text-2xl">UWC 2.0</h1>
        </div>
      </a>
    </>
  );
};

export default Logo;
