import React from "react";

interface style {
  position?: string;
  background?: string;
}

const Loading: React.FC<style> = ({ position, background }) => {
  return (
    <>
      <div className={`khongbietten ${position} ${background}`}>
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
