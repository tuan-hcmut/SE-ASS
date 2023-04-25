import React, { useState } from "react";
import { Link } from "react-router-dom";

const NotFoundError: React.FC = () => {
  return (
    <>
      <title>Home-Trang chủ</title>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
            <h2>Page not found</h2>
          </div>
          <Link to="./">Homepage</Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundError;
