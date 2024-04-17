import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

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
