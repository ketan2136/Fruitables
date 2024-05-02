import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthNew } from '../Redux/action/newAuth.action';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {

    const [loginCheck, setLoginCheck] = useState(false);
    const dispatch = useDispatch()
    const userNewVal = useSelector(state => state.userNew);
    const userEmail = useSelector(state => state.auth);



    // console.log(userNewVal.userNew);
    // console.log(userVal.user);


    useEffect(() => {
        dispatch(getAuthNew());
    }, []);


    // const hasTrueValue1 = Object.values(firebaseValue).map((value) => {
    //     const newValue = Object.values(userAddemail).map((idata) => {
    //         const datas = value === idata;

    //         //   return datas
    //         console.log(datas);
    //     });
    //     return newValue
    // });

    // console.log(hasTrueValue1);


    // useEffect(() => {
    //     if (userNew?.email === user?.email) {
    //         setLoginCheck(true);

    //     }
    // }, [userNew, user])

    // console.log("log for check", loginCheck);
    // console.log('New_auth', userEmail.user);
    // console.log(userVal);
    // const userVal = useSelector(state => state.users);

    // const userNewVal = useSelector(state => state.userNew);
    // console.log(userVal);

    // const sameEmail =  userNewVal?.userNew.some((v) => {
    //     return userEmail.user.email === v.email;
    // });
    // console.log(sameEmail);
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
                sameEmail ? (
                    <Outlet />
                ) : (
                    <Navigate to="/logins" />
                )
            }
        </>
    );
}

export default memo(PrivateRoutes);



