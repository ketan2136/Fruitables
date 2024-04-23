import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { addAuth, getAuth } from '../Redux/action/auth.action';
import { getAuthNew } from '../Redux/action/newAuth.action';

const PrivateRoutes = ({admin}) => {

    console.log('privateroutes',admin);

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(addAuth()); // Dispatch the getAuth action when the component mounts
    }, [dispatch]);

    const authVal = useSelector(state => state.auth);
    
    
    // const isAdmin = authVal.user && authVal.user.role === 'admin';
    console.log('New_auth', authVal);
    console.log('auth', authVal.user);
  
    return (
        <>
            {
               authVal ? (
                    <Outlet />
                ) : (
                    <Navigate to="/logins" />
                )
            }
        </>
    );
}

export default memo(PrivateRoutes);



