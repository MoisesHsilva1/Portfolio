import { Routes, Route } from "react-router";
import Portfolio from "../pages/Portifolio";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />}></Route>
    </Routes>
  );
}
export default AppRoutes;
