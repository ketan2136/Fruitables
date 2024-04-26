import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { addAuth, getAuth } from '../Redux/action/auth.action';
import { getAuthNew } from '../Redux/action/newAuth.action';
import { adminAddLoginGet } from '../Redux/action/admin.action';
import { Email } from '@mui/icons-material';

const PrivateRoutes = () => {


    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(adminAddLoginGet()); // Dispatch the getAuth action when the component mounts
    // }, [dispatch]);

    useEffect(() => {
        dispatch(getAuthNew());
        // dispatch(getAuth());

    }, []);

    // const authVal = useSelector(state => state.auth);

    // const userVal = useSelector(state => state.users);
    const userNewVal = useSelector(state => state.userNew);
    const userEmail = useSelector(state => state.auth);

    // console.log(userEmail.user.email);
    // console.log(userEmail.user.providerId);



    console.log('New_auth', userEmail.user);
    // console.log(userVal);
    // const userVal = useSelector(state => state.users);

    // const userNewVal = useSelector(state => state.userNew);
    // console.log(userVal);

    const sameEmail = Array.isArray(userNewVal.userNew) && userNewVal.userNew.some((v) => {
        return userEmail.user.email === v.email;
    });
    


    // const existsInUsers = userNewVal.userNew && userVal.users ? 
    //     userNewVal.userNew.some((v) =>
    //         userVal.users.some((e) => e.email === v.email && e.password === v.password)
    //     ) : false;

    // console.log('Exists in users:', existsInUsers);

    return (
        <>
            {
                sameEmail > 0 ? (
                    <Outlet />
                 ) : (
                    <Navigate to="/logins" />
                )
            } 
        </>
    );
}

export default memo(PrivateRoutes);



