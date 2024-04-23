import { Route, Router, Routes } from "react-router-dom";

import Layout from "../Layout";
import { lazy } from "react";
import Toolbar from "../components/Toolbar/Toolbar";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";
import ImageCard from "./../components/ImageCard/ImageCard";

const Home = () => {
  // const ImageCard = lazy(() => import("../components/ImageCard/ImageCard"));
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<ImageCard />} />
      </Routes> */}
      <Toolbar />
      <ImageCard />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
