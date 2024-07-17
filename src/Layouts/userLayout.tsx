import ThemeButton from "@/Components/ThemeButton";
import React from "react";
import { Outlet } from "react-router-dom";

const UserLayout: React.FC = () => {
  return (
    <>
      <h1>Nav bar</h1> <ThemeButton />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;
