import { Route, Routes } from "react-router-dom";
import { Paths } from "./path";
import { SportsPage } from "../pages/Sports";
import { HomePage } from "../pages/Home";
import { Layout } from "../pages/Layout";
import { InPlayPage, IndianCasinoPage } from "../pages";
export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path={Paths.home} element={<HomePage />} />
        <Route path={Paths.sports} element={<SportsPage />} />
        <Route path={Paths.inplay} element={<InPlayPage />} />
        <Route path={Paths.indianCasino} element={<IndianCasinoPage />} />
      </Route>
    </Routes>
  );
};
