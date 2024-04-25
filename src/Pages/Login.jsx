// import { useFormik } from 'formik';
// import React, { useEffect, useState } from 'react'
// import * as yup from 'yup'

// import { useDispatch, useSelector } from 'react-redux';
// import { addAuth, getAuth, logoutAuth } from '../Redux/action/auth.action';
// import { useHistory, useNavigate } from 'react-router-dom';
// import { adminAddLogin, adminLogout } from '../Redux/action/admin.action';
// import PrivateRoutes from '../Routes/PrivateRoutes';
// import { getAuthNew } from '../Redux/action/newAuth.action';


// const Login = () => {
//     const [authtype, setauthtype] = useState('logins');
//     const dispatch = useDispatch()
//     const navigate = useNavigate();

//     useEffect(() => {
//         // dispatch(getAuth());
//         // dispatch(adminLoginGet()) // Dispatching the action
//         dispatch(getAuthNew()) // Dispatching the action
//     }, [dispatch]);

//     const userVal = useSelector(state => state.userNew);
//     console.log('login', userVal.userNew);


//     let loginschema = yup.object({
//         email: yup.string().required().email(),
//         password: yup.string().required(),
//         confirmPassword: yup.string()
//         .oneOf([yup.ref('password'), undefined], 'Passwords not match')

//     });

//     const formik = useFormik({
//         validationSchema: loginschema,
//         initialValues: {
//             email: '',
//             password: '',
//             confirmPassword: '',

//         },
//         onSubmit: (values, action) => {
//             const notification = document.createElement('div');
//             notification.textContent = 'successfully... \nEmail: ' + values.email;
//             notification.style.backgroundColor = '#4CAF50';  // Background color
//             notification.style.color = '#FFFFFF';  // Text color
//             notification.style.padding = '15px';
//             notification.style.position = 'fixed';
//             notification.style.top = '10px';
//             notification.style.right = '10px';
//             notification.style.zIndex = '9999';
//             notification.style.borderRadius = '5px';
//             notification.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

//             document.body.appendChild(notification);

//             const isAdmin = userVal.userNew.some(user => {
//                 console.log("Checking user email:", user.email);
//                 return user.email === values.email &&
//                     user.password === values.password
//             });


//             // dispatch(addAuth(values))
//             // handlePrivate(values)

//             console.log("isAdmin:", isAdmin);


//             if (isAdmin) {
//                 console.log("Redirecting to admin panel");
//                 navigate('/admin');

//             } else {
//                 console.log("Regular login");
//                 navigate('/')
//             }

//             setTimeout(() => {
//                 notification.remove();
//             }, 3000);

//             // handleLogin(values);
//             dispatch(adminAddLogin(values));

//             action.resetForm();
//         },

//     });

//     // const handlePrivate = (admin) => {
//     //     console.log('handleprivate', admin);
//     //     return (

//     //         <PrivateRoutes admin={admin} />
//     //     )
//     // }


//     // const handleLogin = (values) => {
//     //     // console.log('loginvalue', values);
//     //     // dispatch(addAuth(values));
//     //     dispatch(adminAddLogin(values));
//     //     // localStorage.setItem('user', JSON.stringify(values));

//     // }

//     const handleLogout = () => {

//         // dispatch(logoutAuth());
//         const notification = document.createElement('div');
//         notification.textContent = 'Logged out successfully!';
//         notification.style.backgroundColor = '#F44336';  // Background color
//         notification.style.color = '#FFFFFF';  // Text color
//         notification.style.padding = '15px';
//         notification.style.position = 'fixed';
//         notification.style.top = '10px';
//         notification.style.right = '10px';
//         notification.style.zIndex = '9999';
//         notification.style.borderRadius = '5px';
//         notification.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

//         document.body.appendChild(notification);
//         setTimeout(() => {
//             // dispatch(logoutAuth())
//             dispatch(adminLogout())
//             notification.remove();
//         }, 3000);
//         navigate('/logins');
//     }

//     const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

//     return (
//         <>
//             <div className="container-fluid page-header py-5">
//                 <h1 className="text-center text-white display-6">Login</h1>
//                 <ol className="breadcrumb justify-content-center mb-0">
//                     <li className="breadcrumb-item"><a href="#">Home</a></li>
//                     <li className="breadcrumb-item"><a href="#">Pages</a></li>
//                     <li className="breadcrumb-item active text-white">Contact</li>
//                 </ol>
//             </div>

//             <div className='login-from'>
//                 {
//                     authtype === 'login' ? <h2>Login</h2> :
//                         <h2 style={{ textAlign: 'center' }}>Register</h2>
//                 }

//                 <form action="" onSubmit={handleSubmit}>

//                     <label>E-mail</label>
//                     <input type="email" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder='Enter your email......' />
//                     <span style={{ color: 'red' }}>{errors.email && touched.email ? errors.email : null}  </span>

//                     <label>password</label>
//                     <input type="password" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder='Enter your password......' />
//                     <span style={{ color: 'red' }}>{errors.password && touched.password ? errors.password : null}  </span>


//                     {
//                         authtype === 'login' ?
//                             null :
//                             <div>
//                                 <label>Confirm Password</label>
//                                 <input type="password" name='confirmPassword' value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} placeholder='Enter your confirmPassword......' />
//                                 <span style={{ color: 'red' }}>{errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : null}  </span>
//                             </div>
//                     }

//                     {
//                         authtype === 'login'
//                             ?
//                             <div className='login-button'>
//                                 <button type='submit'>Login</button>
//                             </div>
//                             :
//                             <div className='login-button'>
//                                 <button type='submit'>Submit</button>
//                             </div>
//                     }

//                     {/* <div className='login-button'>
//                         <button type='submit'>Login</button>
//                     </div> */}
//                 </form>

//                 {/* <div className='login-button'>
//                     <button onClick={handleLogout} >Logout</button>
//                 </div> */}

//                 {

//                     authtype === 'login' ?
//                         <>
//                             <span className="login1"> creat new account <a href="#" className='authhh' onClick={() => setauthtype('signup')}>signup</a></span>
//                         </>
//                         :
//                         <span className="login1">you have alredy account <a href="#" className='authhh' onClick={() => setauthtype('login')}>login</a></span>

//                 }
//             </div>
//         </>
//     )
// }

// export default Login


import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import * as yup from 'yup'

import { useDispatch, useSelector } from 'react-redux';
import { addAuth, getAuth, logoutAuth } from '../Redux/action/auth.action';
import { useHistory, useNavigate } from 'react-router-dom';
import { adminAddLogin, adminLogout } from '../Redux/action/admin.action';
import PrivateRoutes from '../Routes/PrivateRoutes';
import { getAuthNew } from '../Redux/action/newAuth.action';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import { loginRequest, signupRequest } from '../Redux/action/login.action';
import { collection, doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';


const Login = () => {
    const [authtype, setauthtype] = useState('logins');
    const dispatch = useDispatch()
    const navigate = useNavigate();


    let loginschema = yup.object({
        email: yup.string().required().email(),
        password: yup.string().required(),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password'), undefined], 'Passwords not match')

    });

    const formik = useFormik({
        validationSchema: loginschema,
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',

        },
        onSubmit: (values, action) => {

            if (authtype === 'login') {
                handelLogin(values)
            } else {
                handleSignup(values)
            }

            action.resetForm();
        },

    });

    const handleSignup = async (values) => {
        try {
            const { email, password } = values;
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if(user) {
                await setDoc(doc(db, "users", user.uid), {
                    email: user.email
                });
            }
            console.log("user Registerd Successfully!!");
            toast.success('user Registered Successfully!!', {
                position: 'top-center',
                autoClose: 3000 // Close the toast after 3 seconds
            });
        } catch(error) {
            console.log(error);
            // toast.error(error.message, {position: 'bottom-center'});
        }
    }

    const handelLogin = async(values) => {
        try {
            await signInWithEmailAndPassword(auth, values.email, values.password)
            console.log('login successfully')
            alert('login Successfully');
            navigate("/")
        } catch(error) {
            console.log(error.message);
            alert('Please Register');
        }
    }

    const handlelogout = async() => {
        try {
            await auth.signOut()
            console.log("Logout Successfully");
        } catch(error) {
            console.log(error.message);
        }
    }
    

    // const handleSignup = async (values) => {
        // const { email, password } = values; // Destructuring values

        // try {
        //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        //     // Signed in
        //     const user = userCredential.user;
        //     console.log('User signed up:', user);

        //     // Send email verification
        //     sendEmailVerification(auth.currentUser)
        //         .then(() => {
        //             console.log('Email verification sent!');
        //         })
        //         .catch((error) => {
        //             console.error('Error sending email verification:', error);
        //         });

        // } catch (error) {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;

        //     console.error('Error signing up:', errorCode, errorMessage);
        // }
        // dispatch(signupRequest(values))
    // }


    // const handelLogin = (values) => {
        // console.log(values);
        // signInWithEmailAndPassword(auth, values.email, values.password)
        //     .then((userCredential) => {
        //         // Signed in 
        //         const user = userCredential.user;
        //         if (user.emailVerified) {
        //             console.log('login sucsecfuly');
        //             localStorage.setItem("loginstatus", 'true');
        //             navigate('/')
        //         } else {
        //             console.log('noo');
        //         }
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //     });


        // dispatch(loginRequest(values))
        // // localStorage.setItem("loginstatus", 'true');
        // // navigate('/')
    // };




    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

    return (
        <>
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Login</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item active text-white">Contact</li>
                </ol>
                <button onClick={handlelogout}>Logout</button>
            </div>

            <div className='login-from'>
                {
                    authtype === 'login' ? <h2 style={{ textAlign: 'center' }}>Login</h2> :
                        <h2 style={{ textAlign: 'center' }}>Register</h2>
                }

                <form action="" onSubmit={handleSubmit}>

                    <label>E-mail</label>
                    <input type="email" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder='Enter your email......' />
                    <span style={{ color: 'red' }}>{errors.email && touched.email ? errors.email : null}  </span>

                    <label>password</label>
                    <input type="password" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder='Enter your password......' />
                    <span style={{ color: 'red' }}>{errors.password && touched.password ? errors.password : null}  </span>


                    {
                        authtype === 'login' ?
                            null :
                            <div>
                                <label>Confirm Password</label>
                                <input type="password" name='confirmPassword' value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} placeholder='Enter your confirmPassword......' />
                                <span style={{ color: 'red' }}>{errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : null}  </span>
                            </div>
                    }

                    {
                        authtype === 'login'
                            ?
                            <div className='login-button'>
                                <button type='submit'>Login</button>
                            </div>
                            :
                            <div className='login-button'>
                                <button type='submit'>Submit</button>
                            </div>
                    }

                    {/* <div className='login-button'>
                        <button type='submit'>Login</button>
                    </div> */}
                </form>

                {/* <div className='login-button'>
                    <button onClick={handleLogout} >Logout</button>
                </div> */}

                {

                    authtype === 'login' ?
                        <>
                            <span className="login1"> creat new account <a href="#" className='authhh' onClick={() => setauthtype('signup')}>signup</a></span>
                        </>
                        :
                        <span className="login1">you have alredy account <a href="#" className='authhh' onClick={() => setauthtype('login')}>login</a></span>

                }
            </div>
        </>
    )
}

export default Login


