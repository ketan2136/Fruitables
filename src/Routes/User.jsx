import React from 'react'
import Navbar from '../Components/Header/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Shop from '../Pages/Shop'
import ShopDetails from '../Pages/ShopDetails'
import Cart from '../Pages/Cart'
import Chackout from '../Pages/Chackout'
import Testimonial from '../Pages/Testimonial'
import Contact from '../Pages/Contact'
import Footer from '../Components/Footer/Footer'
import Login from '../Pages/Login'
import CartDetails from '../Components/Cart/CartDetails/CartDetails'

const User = ({user, login, logout}) => {
    return (
        <div>
            <Navbar user={user} login={login} logout={logout}/>
            <Routes>
                {/* <Route path={"/"} element={<Home />} /> */}
                <Route path={"/"} element={<Home  />} />
                <Route path={"/shop"} element={<Shop />} />
                <Route path={"/shopDetails/:id"} element={<ShopDetails />} />
                <Route path={"/cart"} element={<Cart />} />
                <Route path={"/chackout"} element={<Chackout />} />
                <Route path={"/testimonial"} element={<Testimonial />} />
                <Route path={"/contact"} element={<Contact />} />
                <Route path={"/logins"} element={<Login />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default User
