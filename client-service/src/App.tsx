import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import UserInfor from "./pages/UserInfor";
import SelectRole from "./pages/SelectRole";

function App() {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login loading={loading} setLoading={setLoading} />} />
        <Route path="signup" element={<Signup loading={loading} setLoading={setLoading} />} />
        <Route path="logout" element={<Logout />} />
        <Route path="user/userinfor" element={<UserInfor loading={loading} setLoading={setLoading} />} />
        <Route path="user/selectrole" element={<SelectRole loading={loading} setLoading={setLoading} />} />
      </Routes>
    </div>
  );
}

export default App;
