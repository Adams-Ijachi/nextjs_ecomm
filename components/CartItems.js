

const CartItems = () => {
    return ( 
        <div className="shp__single__product">
            <div className="shp__pro__thumb">
                <a href="#">
                    <img src="images/product/sm-img/1.jpg" alt="product images"/>
                </a>
            </div>
            <div className="shp__pro__details">
                <h2><a href="product-details.html">BO&Play Wireless Speaker</a></h2>
                <span className="quantity">QTY: 1</span>
                <span className="shp__price">$105.00</span>
            </div>
            <div className="remove__btn">
                <a href="#" title="Remove this item"><i className="zmdi zmdi-close"></i></a>
            </div>
        </div>
     );
}
 
export default CartItems;