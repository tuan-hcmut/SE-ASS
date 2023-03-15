import React, { useContext } from "react";

import Loading from "../components/common/Loading";
import AuthContext from "../context/AuthProvider";

interface Props {
  loading: boolean;
  setLoading: any;
}

const SelectRole: React.FC<Props> = ({ loading, setLoading }) => {
  const { user } = useContext(AuthContext);

  if (!user.isLogin) window.location.href = "/login";

  return (
    <>
      <div className="sky-bg w-screen h-screen">
        <div>hell</div>
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
