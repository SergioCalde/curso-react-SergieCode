import { Navigate, Route, Routes } from "react-router-dom"

import { NavBar } from "./components/NavBar";
import { ShopPage } from "./pages/ShopPage";
import { CartPage } from "./pages/CartPage";

export const CartApp = () => {
  return (
    <>
    <NavBar></NavBar>
    <div className="container">
        <Routes>
            <Route path="/" element={<ShopPage></ShopPage>}></Route>
            <Route path="/cart" element={<CartPage></CartPage>}></Route>
            <Route path="/*" element={ <Navigate to='/' /> }></Route>
        </Routes>
    </div>
    </>
  )
}
