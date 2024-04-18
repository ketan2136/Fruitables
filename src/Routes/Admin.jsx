import React from 'react'
import MuiDrawer from '../AdminSide/MuiDrawer'
import { Route, Routes } from 'react-router-dom'
import Desboard from '../AdminSide/Componets/Desboard'
import Facility from '../AdminSide/Componets/Facility'
import { Products } from '../AdminSide/Componets/Products'
import Shop from '../AdminSide/Componets/Shop'
import { useSelector } from 'react-redux'
import AdminLogin from '../AdminSide/Componets/AdminLogin'

const Admin = () => {
    const authVal = useSelector(state => state.auth);

    if (!authVal.user) {
        return <p>You are not authorized to view this page.</p>;
    }

    return (
        <div>

            {/* <h1>Admin Penal</h1> */}
            <MuiDrawer>
                <Routes>
                    <Route >
                        <Route path='/' element={<Desboard />} />
                    </Route>
                    <Route path='/facilitydrower' element={<Facility />}></Route>
                    <Route path='/productdrower' element={<Products />}></Route>
                    <Route path='/shopadmin' element={<Shop />}></Route>
                    <Route path='/adminLogin' element={<AdminLogin />}></Route>
                </Routes>
            </MuiDrawer>
        </div>
    )
}

export default Admin
