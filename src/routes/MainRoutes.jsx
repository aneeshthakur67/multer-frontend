import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Gallery from "../pages/Gallery";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
