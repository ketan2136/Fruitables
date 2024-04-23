import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCart, incrementCart, removeCart } from '../../../Redux/slice/cartSlice';

const CartDetails = () => {

    const shopVal = useSelector(state => state.shop);
    const cartVal = useSelector(state => state.cart);
    console.log("cartVal",cartVal);
    console.log('shopVal',shopVal);

    const dispatch = useDispatch()

    let cartItems = cartVal.item.map((v) => {
        let cartData = shopVal.shop.find((m) => m.id === v.cid);

        let fData = { ...cartData, ...v };

        return fData;
    })

    console.log(cartItems);

    const handleCartIncrement = (id) => {
        console.log(id);
        dispatch(incrementCart(id))
    }


    const handleCartdecrement = (id) => {
        console.log(id);
        const item = cartVal.item.find(item => item.cid === id);
        if (item && item.qty > 1) {
            dispatch(decrementCart(id));
        }

    }

    const handleRemove = (id) => {
        dispatch(removeCart(id))
    }

    const subtotal = cartItems.reduce((acc, item) => acc + (item.qty * item.price), 0);

    console.log(subtotal);

    return (
        <div>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Products</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    cartItems.map((v) => (

                                        <tr>
                                           
                                            <th scope="row">
                                                <div className="d-flex align-items-center">
                                                    <img src={v.image} className="img-fluid me-5 rounded-circle" style={{ width: 80, height: 80 }} alt />
                                                </div>
                                            </th>
                                            <td>
                                                <p className="mb-0 mt-4">{v.fruite}</p>
                                            </td>
                                            <td>
                                                <p className="mb-0 mt-4">{v.price}</p>
                                            </td>
                                            <td>
                                                <div className="input-group quantity mt-4" style={{ width: 100 }}>
                                                    <div className="input-group-btn">
                                                        <button onClick={()=>handleCartdecrement(v.id)} className="btn btn-sm btn-minus rounded-circle bg-light border">
                                                            <i className="fa fa-minus" />
                                                        </button>
                                                    </div>
                                                    <p className="form-control-sm text-center border-0">{v.qty }</p>
                                                    <div className="input-group-btn">
                                                        <button onClick={()=>handleCartIncrement(v.id)} className="btn btn-sm btn-plus rounded-circle bg-light border">
                                                            <i className="fa fa-plus" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="mb-0 mt-4">{v.qty * v.price}</p>
                                            </td>
                                            <td>
                                                <button onClick={() => handleRemove(v.id)} className="btn btn-md rounded-circle bg-light border mt-4">
                                                    <i className="fa fa-times text-danger" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }

                                {/* <tr>
                                    <th scope="row">
                                        <div className="d-flex align-items-center">
                                            <img src="img/vegetable-item-3.png" className="img-fluid me-5 rounded-circle" style={{ width: 80, height: 80 }} alt />
                                        </div>
                                    </th>
                                    <td>
                                        <p className="mb-0 mt-4">Big Banana</p>
                                    </td>
                                    <td>
                                        <p className="mb-0 mt-4">2.99 $</p>
                                    </td>
                                    <td>
                                        <div className="input-group quantity mt-4" style={{ width: 100 }}>
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                                                    <i className="fa fa-minus" />
                                                </button>
                                            </div>
                                            <input type="text" className="form-control form-control-sm text-center border-0" defaultValue={1} />
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                                                    <i className="fa fa-plus" />
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0 mt-4">2.99 $</p>
                                    </td>
                                    <td>
                                        <button className="btn btn-md rounded-circle bg-light border mt-4">
                                            <i className="fa fa-times text-danger" />
                                        </button>
                                    </td>
                                </tr> */}

                            </tbody>
                        </table>
                    </div>
                    <div className="mt-5">
                        <input type="text" className="border-0 border-bottom rounded me-5 py-3 mb-4" placeholder="Coupon Code" />
                        <button className="btn border-secondary rounded-pill px-4 py-3 text-primary" type="button">Apply Coupon</button>
                    </div>
                    <div className="row g-4 justify-content-end">
                        <div className="col-8" />
                        <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                            <div className="bg-light rounded">
                                <div className="p-4">
                                    <h1 className="display-6 mb-4">Cart <span className="fw-normal">Total</span></h1>
                                    <div className="d-flex justify-content-between mb-4">
                                        <h5 className="mb-0 me-4">Subtotal:</h5>
                                        <p className="mb-0">${subtotal}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h5 className="mb-0 me-4">Shipping</h5>
                                        <div className>
                                            <p className="mb-0">Flat rate: $3.00</p>
                                        </div>
                                    </div>
                                    <p className="mb-0 text-end">Shipping to Ukraine.</p>
                                </div>
                                <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                                    <h5 className="mb-0 ps-4 me-4">Total</h5>
                                    <p className="mb-0 pe-4">$99.00</p>
                                </div>
                                <button className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4" type="button">Proceed Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CartDetails
