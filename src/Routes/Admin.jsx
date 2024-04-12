import React from 'react'
import MuiDrawer from '../AdminSide/MuiDrawer'
import { Route, Routes } from 'react-router-dom'
import Desboard from '../AdminSide/Componets/Desboard'
import Facility from '../AdminSide/Componets/Facility'
import { Products } from '../AdminSide/Componets/Products'
import Shop from '../AdminSide/Componets/Shop'

const Admin = () => {
    return (
        <div>
            <MuiDrawer>
                <Routes>
                    <Route >
                        <Route path='/' element={<Desboard />} />
                    </Route>
                    <Route path='/facilitydrower' element={<Facility />}></Route>
                    <Route path='/productdrower' element={<Products />}></Route>
                    <Route path='/shopadmin' element={<Shop />}></Route>
                </Routes>
            </MuiDrawer>
        </div>
    )
}

export default Admin
