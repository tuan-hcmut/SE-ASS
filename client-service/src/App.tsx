import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import UserInfor from "./pages/UserInfor";
import SelectRole from "./pages/SelectRole";
import Vehicle from "./pages/Vehicle";
import { GeneralProvider } from "./context/generalProvider";
import AuthContext from "./context/AuthProvider";
import MCPs from "./pages/MCPs";
import AssignVehicle from "./pages/AssignVehicle";
import AssignMcps from "./pages/AssignMcps";
import NotFoundError from "./pages/NotFoundError";
import TaskAssign from "./components/janitor-collector/TaskAssign";
import AssignRoute from "./pages/AssignRoute";

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useContext(AuthContext);

  return (
    <GeneralProvider user={user.data}>
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login loading={loading} setLoading={setLoading} />} />
          <Route path="signup" element={<Signup loading={loading} setLoading={setLoading} />} />
          <Route path="logout" element={<Logout />} />
          <Route path="user/userinfor" element={<UserInfor loading={loading} setLoading={setLoading} />} />
          <Route path="user/selectrole" element={<SelectRole loading={loading} setLoading={setLoading} />} />
          <Route path="vehicles/infor" element={<Vehicle />} />
          <Route path="mcps" element={<MCPs />} />
          <Route path="vehicles/assign" element={<AssignVehicle />} />
          <Route path="route/create" element={<AssignRoute />} />
          <Route path="task/assigned" element={<TaskAssign />} />
          <Route path="mcps/assign" element={<AssignMcps />} />
          <Route path="*" element={<NotFoundError />} />
        </Routes>
      </div>
    </GeneralProvider>
  );
}

export default App;
