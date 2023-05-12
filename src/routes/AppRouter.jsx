import { Route, Routes } from "react-router-dom";
import { Paths } from "./path";
import { Home } from "../pages";
export const AppRouter = () => {
  return (
    <Routes>
      <Route path={Paths.home} element={<Home />} />
    </Routes>
  );
};
