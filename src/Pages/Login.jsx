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
            if (user) {
                await setDoc(doc(db, "users", user.uid), {
                    email: user.email
                });
            }
            console.log("user Registerd Successfully!!");
            alert('user Registered Successfully!!', {
                position: 'top-center',
                autoClose: 3000 // Close the toast after 3 seconds
            });
        } catch (error) {
            console.log(error);
            // toast.error(error.message, {position: 'bottom-center'});
        }
    }

    const handelLogin = async (values) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password)
            console.log('login successfully')
            const user = userCredential.user;
            console.log(user.password);
            dispatch(getAuth({ email: user.email, password: user.providerId }))
            alert('login Successfully');
            // navigate("/")
        } catch (error) {
            console.log(error.message);
            alert('Please Register');
        }
    }

    const handlelogout = async () => {
        try {
            await auth.signOut()
            console.log("Logout Successfully");
            // dispatch(logoutAuth())
        } catch (error) {
            console.log(error.message);
        }
    }




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

                </form>

                {

                    authtype === 'login' ?
                        <>
                            <span style={{textAlign:'center', paddingTop:"10px"}} className="login1"> Create New Account <a href="#" className='authhh' onClick={() => setauthtype('signup')}>signup</a></span>
                        </>
                        :
                        <span style={{textAlign:'center', paddingTop:"10px"}} className="login1">You Have Already Account<a href="#" className='authhh' onClick={() => setauthtype('login')}>login</a></span>

                }
            </div>

        </>
    )
}

export default Login


