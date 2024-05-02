import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useFormik } from 'formik';
import * as yup from 'yup'
const ChackoutDetails = () => {

    const shopVal = useSelector(state => state.shop);
    const cartVal = useSelector(state => state.cart);
    console.log("cartVal", cartVal);
    console.log('shopVal', shopVal);

    const dispatch = useDispatch()

    let cartItems = cartVal.item.map((v) => {
        let cartData = shopVal.shop.find((m) => m.id === v.cid);

        let fData = { ...cartData, ...v };

        return fData;
    })

    console.log(cartItems);

    const subtotal = cartItems.reduce((acc, item) => acc + (item.qty * item.price), 0);

    console.log(subtotal);

    let productSchema = yup.object({
        fname: yup.string().required(),
        lname: yup.string().required(),
        company: yup.string().required(),
        address: yup.string().required(),
        city: yup.string().required(),
        country: yup.string().required(),
        postcode: yup.string().required(),
        number: yup.string().required(),
        email: yup.string().required(),
        Accounts: yup.string().required(),
        description: yup.string().required(),
        image: yup.mixed().required("please upload file"),
    });


    const formik = useFormik({
        validationSchema: productSchema,
        initialValues: {
            fname: '',
            lname: '',
            company: '',
            address: '',
            city: '',
            country: '',
            postcode: '',
            number: '',
            email: '',
            Accounts: '',
            description: '',
        },
        onSubmit: async (values, action) => {
            console.log('file', values);

            // if (update) {
            //     dispatch(editShop(values))
            // } else {
            //     const rNo = Math.floor(Math.random() * 1000)
            //     dispatch(addShop({ ...values, id: rNo }));
            // }


            action.resetForm();
        },
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = formik;




    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <h1 className="mb-4">Billing details</h1>
                <form onSubmit={handleSubmit}>
                    <div className="row g-5">
                        <div className="col-md-12 col-lg-6 col-xl-7">
                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    <div className="form-item w-100">
                                        <label className="form-label my-3">First Name<sup>*</sup></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name='fname'
                                            value={values.fname}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: 'red' }}>{errors.fname && touched.fname ? errors.fname : null}  </span>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6">
                                    <div className="form-item w-100">
                                        <label className="form-label my-3">Last Name<sup>*</sup></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name='lname'
                                            value={values.lname}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: 'red' }}>{errors.lname && touched.lname ? errors.lname : null}  </span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Company Name<sup>*</sup></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='company'
                                    value={values.company}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <span style={{ color: 'red' }}>{errors.company && touched.company ? errors.company : null}  </span>
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Address <sup>*</sup></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="House Number Street Name"
                                    name='address'
                                    value={values.address}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <span style={{ color: 'red' }}>{errors.address && touched.address ? errors.address : null}  </span>
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Town/City<sup>*</sup></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='city'
                                    value={values.city}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <span style={{ color: 'red' }}>{errors.city && touched.city ? errors.city : null}  </span>
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Country<sup>*</sup></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='country'
                                    value={values.country}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <span style={{ color: 'red' }}>{errors.country && touched.country ? errors.country : null}  </span>
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Postcode/Zip<sup>*</sup></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='postcode'
                                    value={values.postcode}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <span style={{ color: 'red' }}>{errors.postcode && touched.postcode ? errors.postcode : null}  </span>

                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Mobile<sup>*</sup></label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name='number'
                                    value={values.number}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <span style={{ color: 'red' }}>{errors.number && touched.number ? errors.number : null}  </span>
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Email Address<sup>*</sup></label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name='email'
                                    value={values.email}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <span style={{ color: 'red' }}>{errors.email && touched.email ? errors.email : null}  </span>
                            </div>
                            <div className="form-check my-3">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="Account-1" name="Accounts"
                                    defaultValue="Accounts"
                                   
                                />
                                
                                <label className="form-check-label" htmlFor="Account-1">Create an account?</label>
                            </div>
                            <hr />
                            <div className="form-check my-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox" id="Address-1"
                                    name="Address"
                                    defaultValue="Address"
                                />
                                <label className="form-check-label" htmlFor="Address-1">Ship to a different address?</label>
                            </div>
                            <div className="form-item">
                                <textarea
                                    ame="text"
                                    name='description'
                                    className="form-control"
                                    spellCheck="false" cols={30} rows={11}
                                    placeholder="Oreder Notes (Optional)"
                                    value={values.description}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <span style={{ color: 'red' }}>{errors.description && touched.description ? errors.description : null}  </span>

                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-5">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Products</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartItems.map((v) => {
                                                return (
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="d-flex align-items-center mt-2">
                                                                <img src={v.image} className="img-fluid rounded-circle" style={{ width: 90, height: 90 }} alt />
                                                            </div>
                                                        </th>
                                                        <td className="py-5">{v.fruite}</td>
                                                        <td className="py-5"><CurrencyRupeeIcon />{v.price}</td>
                                                        <td className="py-5">{v.qty}</td>
                                                        <td className="py-5"><CurrencyRupeeIcon />{v.qty * v.price}</td>
                                                    </tr>
                                                )
                                            })
                                        }

                                        {/* <tr>
                                            <th scope="row">
                                                <div className="d-flex align-items-center mt-2">
                                                    <img src="img/vegetable-item-5.jpg" className="img-fluid rounded-circle" style={{ width: 90, height: 90 }} alt />
                                                </div>
                                            </th>
                                            <td className="py-5">Potatoes</td>
                                            <td className="py-5">$69.00</td>
                                            <td className="py-5">2</td>
                                            <td className="py-5">$138.00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="d-flex align-items-center mt-2">
                                                    <img src="img/vegetable-item-3.png" className="img-fluid rounded-circle" style={{ width: 90, height: 90 }} alt />
                                                </div>
                                            </th>
                                            <td className="py-5">Big Banana</td>
                                            <td className="py-5">$69.00</td>
                                            <td className="py-5">2</td>
                                            <td className="py-5">$138.00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                            </th>
                                            <td className="py-5" />
                                            <td className="py-5" />
                                            <td className="py-5">
                                                <p className="mb-0 text-dark py-3">Subtotal</p>
                                            </td>
                                            <td className="py-5">
                                                <div className="py-3 border-bottom border-top">
                                                    <p className="mb-0 text-dark">$414.00</p>
                                                </div>
                                            </td>
                                        </tr> */}
                                        <tr>
                                            <th scope="row">
                                            </th>
                                            <td className="py-5">
                                                <p className="mb-0 text-dark py-4">Shipping</p>
                                            </td>
                                            <td colSpan={3} className="py-5">
                                                <div className="form-check text-start">
                                                    <input type="checkbox" className="form-check-input bg-primary border-0" id="Shipping-1" name="Shipping-1" defaultValue="Shipping" />
                                                    <label className="form-check-label" htmlFor="Shipping-1">Free Shipping</label>
                                                </div>
                                                <div className="form-check text-start">
                                                    <input type="checkbox" className="form-check-input bg-primary border-0" id="Shipping-2" name="Shipping-1" defaultValue="Shipping" />
                                                    <label className="form-check-label" htmlFor="Shipping-2">Flat rate: $15.00</label>
                                                </div>
                                                <div className="form-check text-start">
                                                    <input type="checkbox" className="form-check-input bg-primary border-0" id="Shipping-3" name="Shipping-1" defaultValue="Shipping" />
                                                    <label className="form-check-label" htmlFor="Shipping-3">Local Pickup: $8.00</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                            </th>
                                            <td className="py-5">
                                                <p className="mb-0 text-dark text-uppercase py-3">TOTAL</p>
                                            </td>
                                            <td className="py-5" />
                                            <td className="py-5" />
                                            <td className="py-5">
                                                <div className="py-3 border-bottom border-top">
                                                    <p className="mb-0 text-dark"><CurrencyRupeeIcon />{subtotal}</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                <div className="col-12">
                                    <div className="form-check text-start my-3">
                                        <input type="checkbox" className="form-check-input bg-primary border-0" id="Transfer-1" name="Transfer" defaultValue="Transfer" />
                                        <label className="form-check-label" htmlFor="Transfer-1">Direct Bank Transfer</label>
                                    </div>
                                    <p className="text-start text-dark">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                </div>
                            </div>
                            <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                <div className="col-12">
                                    <div className="form-check text-start my-3">
                                        <input type="checkbox" className="form-check-input bg-primary border-0" id="Payments-1" name="Payments" defaultValue="Payments" />
                                        <label className="form-check-label" htmlFor="Payments-1">Check Payments</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                <div className="col-12">
                                    <div className="form-check text-start my-3">
                                        <input type="checkbox" className="form-check-input bg-primary border-0" id="Delivery-1" name="Delivery" defaultValue="Delivery" />
                                        <label className="form-check-label" htmlFor="Delivery-1">Cash On Delivery</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                <div className="col-12">
                                    <div className="form-check text-start my-3">
                                        <input type="checkbox" className="form-check-input bg-primary border-0" id="Paypal-1" name="Paypal" defaultValue="Paypal" />
                                        <label className="form-check-label" htmlFor="Paypal-1">Paypal</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                                <button type="submit" className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary">Place Order</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default ChackoutDetails
