import { Routes, Route } from "react-router-dom";
import { ProductSelect } from "../context/ProductSelect";
import HistoryShop from "./HistoryShop";
import CarShop from "./CarShop";
import NavBar from "./NavBar";
import Products from "./Products";
import { useReducer } from "react";
import { productsReducer } from "../reducers/productsReducer";

const initialState = []

const DashBoard = () => {

    const [state, dispatch] = useReducer(productsReducer, initialState)
    return (
      <ProductSelect.Provider value={{state, dispatch}}>
        <NavBar />

        <div className="container p-3">
          <Routes>
            <Route path="/car" element={<CarShop />} />
            <Route path="/historial" element={<HistoryShop />} />
            <Route path="/" element={<Products />} />
          </Routes>
        </div>
      </ProductSelect.Provider>
    );
};

export default DashBoard;
