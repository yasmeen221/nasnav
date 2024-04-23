import { Route, Router, Routes } from "react-router-dom";

import Layout from "../Layout";
import { lazy } from "react";

const Home = () => {
  const ImageCard = lazy(() => import("../components/ImageCard/ImageCard"));
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ImageCard />} />
        </Route>
      </Routes>
      {/* <Toolbar />
      <ImageCard />
      <Cards />
      <Footer /> */}
    </>
  );
};

export default Home;
