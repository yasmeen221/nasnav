import { Route, Routes } from "react-router-dom";
import Cards from "./components/Cards/Cards";
import ImageCard from "./components/ImageCard/ImageCard";
import Layout from "./Layout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ImageCard />} />
        </Route>
      </Routes> */}
      <Home />
    </>
  );
}

export default App;
