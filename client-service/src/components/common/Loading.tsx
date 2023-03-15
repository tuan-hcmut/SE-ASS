import React from "react";

const Loading: React.FC = () => {
  return (
    <>
      <div className="khongbietten">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
