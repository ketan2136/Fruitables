import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useFormik } from 'formik';
import * as yup from 'yup'
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Image } from '@react-pdf/renderer';
import { addpdf } from '../../../Redux/action/pdfData.action';

const ChackoutDetails = () => {

    const shopVal = useSelector(state => state.shop);
    const cartVal = useSelector(state => state.cart);
    const pdfVal = useSelector(state => state.pdf);

    console.log(pdfVal);

    // const dispatch = useDispatch()

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4',
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1,
        },
        image: {
            width: 50, 
            height: 50, 
        },
    });
    const dispatch = useDispatch()

    let cartItems = cartVal.item.map((v) => {
        let cartData = shopVal.shop.find((m) => m.id === v.cid);

        let fData = { ...cartData, ...v };

        return fData;
    })
    const subtotal = cartItems.reduce((acc, item) => acc + (item.qty * item.price), 0);

    const calculateDiscount = () => {
        let discountPercentage = 0;
        let discount = 0;
        if (subtotal > 2000) {
            discountPercentage = 20;
        } else if (subtotal > 1000) {
            discountPercentage = 10;
        }
        discount = subtotal * (discountPercentage / 100);
        return { discountPercentage, discount };
    };
    const { discountPercentage, discount } = calculateDiscount();
    const discountedTotal = subtotal - discount;

    let cartSchema = yup.object({
        fname: yup.string().required(),
        lname: yup.string().required(),
        company: yup.string().required(),
        address: yup.string().required(),
        city: yup.string().required(),
        country: yup.string().required(),
        postcode: yup.string().required(),
        number: yup.string().required(),
        email: yup.string().required(),
        description: yup.string().required(),
    });

    const formik = useFormik({
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
            accounts: false,
            dfaddress: false,
            description: '',
            dataMap: cartItems,
            discountPercentage: discountPercentage,
            discount: discount,
            discountedTotal: discountedTotal,
            subtotal: subtotal,
            delivery: false
        },
        validationSchema: cartSchema,
        onSubmit: (values) => {
            console.log('Form submitted!');
            console.log('Form values:', values);
            dispatch(addpdf(values))
        },
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

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
                                            id='fname'
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
                                            id='lname'
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
                                    id='company'
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
                                    id='address'
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
                                    id='city'
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
                                    id='country'
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
                                    id='postcode'
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
                                    id='number'
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
                                    id='email'
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
                                    name="accounts"
                                    checked={values.accounts} // Binding value to the Formik state
                                    onChange={handleChange} // Handling change event
                                />
                                <label className="form-check-label" htmlFor="Account-1">Create an account?</label>
                            </div>
                            <hr />
                            <div className="form-check my-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="dfaddress"
                                    checked={values.dfaddress} // Binding value to the Formik state
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="Address-1">Ship to a different address?</label>
                            </div>
                            <div className="form-item">
                                <textarea
                                    ame="text"
                                    name='description'
                                    id='description'
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
                                                        <td className="py-5" style={{ textAlign: 'center' }}>{v.qty}</td>
                                                        <td className="py-5"><CurrencyRupeeIcon />{v.qty * v.price}</td>
                                                    </tr>
                                                )
                                            })
                                        }

                                        <tr>
                                            <th scope="row">
                                            </th>
                                            <td className="py-5">
                                                <p className="mb-0 text-dark text-uppercase py-3">Discount ({discountPercentage}%):</p>
                                            </td>
                                            <td className="py-5" />
                                            <td className="py-5" />
                                            {discountPercentage > 0 && (
                                                <td className="py-5">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <p className="mb-0 text-dark"><CurrencyRupeeIcon />{discount.toFixed(2)}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                            )}
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
                                                    <p className="mb-0 text-dark"><CurrencyRupeeIcon />{discountedTotal}</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                <div className="col-12">
                                    <div className="form-check text-start my-3">
                                        <input 
                                        type="checkbox" 
                                        className="form-check-input bg-primary border-0" 
                                        id="delivery-1" 
                                        name="delivery" 
                                        checked={values.delivery} // Binding value to the Formik state
                                        onChange={handleChange}
                                         />
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
                                <button className="btn border-secondary py-3 px-4  w-100 text-primary" type='submit'>Place Order</button>
                            </div>
                        </div>
                    </div>
                    {/* <button className="btn border-secondary py-3 px-4  w-100 text-primary" type='submit' onClick={handleValue}>Place Order</button> */}

                </form>
                <div id="formValues"></div>
            </div>

            {pdfVal.data && pdfVal.data.length > 0 && (
                <PDFDownloadLink
                    document={
                        <Document>
                            <Page size="A4">
                                <View>
                                    {pdfVal.data.map((item, index) => (
                                        <View key={index}>
                                            <Text>
                                                Name: {item.fname} {item.lname} {'\n'}
                                                Address: {item.address} {'\n'}
                                                Company: {item.company} {'\n'}
                                                city: {item.city} {'\n'}
                                                country: {item.country} {'\n'}
                                                number: {item.number} {'\n'}
                                                email: {item.email} {'\n'}{'\n'}{'\n'}
                                                Fruit Data: {'\n'}
                                                {item.dataMap.map((cartItem, cartIndex) => (
                                                    <React.Fragment key={cartIndex}>
                                                        Image:
                                                        {/* {cartItem.image && ( */}
                                                        {/* <img style={styles.image} src={cartItem.image} /> */}
                                                        <img style={styles.image} src={cartItem.image} />
                                                        {/* )} */}
                                                        fruit: {cartItem.fruite} {'\n'}
                                                        {/* description: {cartItem.description} {'\n'} */}
                                                        price: {cartItem.price} {'\n'}
                                                        qty: {cartItem.qty} {'\n'}{'\n'}{'\n'}
                                                    </React.Fragment>
                                                ))}

                                                subtotal: {item.subtotal} {'\n'}
                                                discount: {item.discount} {'\n'}
                                                discountedTotal: {item.discountedTotal} {'\n'}
                                            </Text>
                                            {/* Add other fields as needed */}
                                        </View>

                                    ))}
                                </View>
                            </Page>
                        </Document>
                    }
                    fileName="checkout_details.pdf"
                >
                    {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
                </PDFDownloadLink>
            )}

        </div>

    )
}

export default ChackoutDetails
