import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getAuth } from '../Redux/action/auth.action';

const PrivateRoutes = () => {

    const authVal = useSelector(state => state.auth);
    console.log('auth', authVal.user);

    return (
        <>
            {
                authVal.user ? (
                    <Outlet />
                ) : (
                    <Navigate to="/logins" />
                )
            }
        </>
    );
}

export default memo(PrivateRoutes);
