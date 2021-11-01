// image
import Image from 'next/image'


const ProductItem = ({product, onClick}) => {
    return ( 
        <div className="product-slider-active2">
        <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
            <div className="product">
                <div className="product__inner">
                    <div className="pro__thumb">
                        <a href="#">
                            <Image src={`${product.image}`} alt={`${product.name}`} width={500} height={500}  />
                        </a>
                    </div>
                    <div className="product__hover__info">
                        <ul className="product__action">
                            <li><div data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" onClick={()=> onClick(product)} href="#"><span className="ti-plus"></span></div></li>
                            <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                            <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                        </ul>
                    </div>
                </div>
                <div className="product__details">
                    <h2><a href="product-details.html">{product.name}</a></h2>
                    <ul className="product__price">
                        <li className="old__price">$16.00</li>
                        <li className="new__price">{product.price}</li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
     );
}
 
export default ProductItem;