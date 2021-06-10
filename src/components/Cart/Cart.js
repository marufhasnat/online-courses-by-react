import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const addCourse = props.addCourse;
    const totalCourse = addCourse.reduce((totalCourse,add) => totalCourse+= add.price, 0);
    // let totalCourse = 0;
    // for (let i = 0; i < addCourse.length; i++) {
    //     totalCourse += addCourse[i].price;  
    // }
    let shippingCost = 0;
    if (totalCourse >= 500) {
        shippingCost = 0;
    } else if (totalCourse >= 250) {
        shippingCost = 15.00;
    } else if (totalCourse > 0) {
        shippingCost = 30.00;
    }
    const tax = (totalCourse / 10).toFixed(2);
    const grandTotal = totalCourse + shippingCost + Number(tax);
    const grandTotalPrice = grandTotal.toFixed(2);
    return (
        <div className="cart-details">
            <h4>Enroll Summary</h4>
            <h6>Courses Enrolled: {addCourse.length}</h6>
            <h6>Shipping Cost: ${shippingCost.toFixed(2)}</h6>
            <h6>Estimated Tax: ${tax}</h6>
            <h5>Total Price: ${grandTotalPrice}</h5>
        </div>
    );
};

export default Cart;