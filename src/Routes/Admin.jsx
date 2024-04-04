import React from 'react'
import MuiDrawer from '../AdminSide/MuiDrawer'
import { Route, Routes } from 'react-router-dom'
import Desboard from '../AdminSide/Componets/Desboard'
import Facility from '../AdminSide/Componets/Facility'

const Admin = () => {
    return (
        <div>
            <MuiDrawer>
                <Routes>
                    <Route >
                        <Route path='/' element={<Desboard />} />
                    </Route>
                    <Route path='/Admin/facilitydrower' element={<Facility />}></Route>
                </Routes>
            </MuiDrawer>
        </div>
    )
}

export default Admin
