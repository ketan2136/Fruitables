import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {

    const authVal = useSelector(state => state.auth);

    console.log('auth',authVal.user?.length);

        return (
            <>
                {
                    authVal.user !== null && authVal.user.length > 0 ? (
                        <Outlet />
                ) : (
                    // <h1>hello 1234</h1>
                    <Navigate to="/login"  />
                )
                }
            </>
        )
}

export default PrivateRoutes
