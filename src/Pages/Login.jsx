import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as yup from 'yup'

import { useDispatch, useSelector } from 'react-redux';
import { addAuth } from '../Redux/action/auth.action';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const dispatch = useDispatch()

    const authVal = useSelector(state => state.auth);
    console.log('login', authVal);
    

    let loginschema = yup.object({
        email: yup.string().required().email(),
        password: yup.string().required(),
       
    });

    const formik = useFormik({
        validationSchema: loginschema,

        initialValues: {
            email: '',
            password: '',
         
        },
        onSubmit: (values, action) => {
            console.log(values);
            dispatch(addAuth(values))
            action.resetForm()
           
        },

    });

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
                <h1>Login </h1>
                <form action="" onSubmit={handleSubmit}>
                    <label>E-mail</label>
                    <input type="email" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder='Enter your email......' />
                    <span style={{ color: 'red' }}>{errors.email && touched.email ? errors.email : null}  </span>
                    <label>password</label>
                    <input type="password" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder='Enter your password......' />
                    <span style={{ color: 'red'}}>{errors.password && touched.password ? errors.password : null}  </span>
                    <div className='login-button'>
                        <button type='submit'>Login</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Login
