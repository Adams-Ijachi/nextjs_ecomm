import CartItems from "./CartItems";


const Cart = () => {
    return ( 
        <>
        {/* Start Cart Panel --> */}
        <div className="shopping__cart">
               <div className="shopping__cart__inner">
                   <div className="offsetmenu__close__btn">
                       <a href="#"><i className="zmdi zmdi-close"></i></a>
                   </div>
                   <div className="shp__cart__wrap">
                       <CartItems />
                   </div>
                   <ul className="shoping__total">
                       <li className="subtotal">Subtotal:</li>
                       <li className="total__price">$130.00</li>
                   </ul>
                   <ul className="shopping__btn">
                       <li><a href="cart.html">View Cart</a></li>
                       <li className="shp__checkout"><a href="checkout.html">Checkout</a></li>
                   </ul>
               </div>
           </div>
               {/* End Cart Panel --> */}
        </>
     );
}
 
export default Cart;