
import ProductItem from './ProductItem';
const Products = ({products, onClick}) => {
    return ( 
    <div className="tab-content another-product-style">
        <div className="tab-pane active" id="home9">
            <div className="row">
                {products.map(product => (
                    <ProductItem key={product.id} onClick={onClick} product={product} />
                ))}
            </div>
        </div>
        
    </div>
     );
}
 
export default Products;