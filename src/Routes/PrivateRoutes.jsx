import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { addAuth, getAuth } from '../Redux/action/auth.action';
import { getAuthNew } from '../Redux/action/newAuth.action';
import { adminAddLoginGet } from '../Redux/action/admin.action';

const PrivateRoutes = () => {


    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(adminAddLoginGet()); // Dispatch the getAuth action when the component mounts
    // }, [dispatch]);

    // const authVal = useSelector(state => state.auth);

    const userVal = useSelector(state => state.users);


    const userNewVal = useSelector(state => state.userNew);


    console.log('New_auth', userNewVal.userNew);
    console.log(userVal);
    // const userVal = useSelector(state => state.users);

    // const userNewVal = useSelector(state => state.userNew);
    // console.log(userVal);

    const sameEmail = userNewVal.userNew.some((v) => {
        let currents = userVal.users.some((e) => e.email === v.email && e.password === v.password)

        return currents;
    })
    console.log(sameEmail);

  
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



