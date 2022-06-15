import { Routes, Route, BrowserRouter } from "react-router-dom";
import DashBoard from "../components/DashBoard";

const AppRouter = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/*" element={ <DashBoard /> } />
      </Routes>

    </BrowserRouter>
  );
};

export default AppRouter;
