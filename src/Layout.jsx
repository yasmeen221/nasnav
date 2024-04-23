import React, { Suspense } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Cards/Cards";

const Layout = () => {
  return (
    <>
      <Toolbar />
      <Suspense callback={<div>Loading......</div>}>
        <Outlet />
      </Suspense>

      <Cards />
      <Footer />
    </>
  );
};

export default Layout;
