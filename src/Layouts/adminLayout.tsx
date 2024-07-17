import React from "react";
import { Outlet } from "react-router-dom";

const adminLayout: React.FC = () => {
  return (
    <>
      <h1>admin Nav</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default adminLayout;
