import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = ({user}) => {

    const authVal = useSelector(state => state.auth);

    // console.log('auth',authVal);

        return (
            <>
                {
                    // authVal.user !== null && authVal.user.length > 0 ? (
                    authVal.user  ? (
                        <Outlet />
                ) : (
                    // <h1>hello 1234</h1>
                    <Navigate to="/logins"  />
                )
                }
            </>
        )
}

export default memo(PrivateRoutes);


// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate, Outlet } from 'react-router-dom';

// const PrivateRoutes = () => {
//     const authVal = useSelector(state => state.auth);

//     console.log('auth', authVal.user);

//     return (
//         <>
//             {authVal.user ? ( 
//                 <Outlet /> 
//             ) : (
//                 <Navigate to="/login" /> 
//             )}
//         </>
//     );
// };

// export default PrivateRoutes;
