import { Route, Routes } from "react-router-dom";
import "./app.css";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./component/Footer/Footer";
import {useState} from 'react';
import LoginPopup from "./component/LoginPopup/LoginPopup";
import OrderPlaced from "./component/OrderPlaced/OrderPlaced";
export function App() {

  const [login,setLogin]=useState(false);
  return (
    <>
    {
      login?<LoginPopup setLogin={setLogin}/>:<></>
    }
      <div className="app">
        <Navbar setLogin={setLogin} />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order" element={<PlaceOrder />}></Route>
          <Route path="/orderplaced" element={<OrderPlaced/>}/>
        </Routes>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
