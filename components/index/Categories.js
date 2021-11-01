
import CategoryItem from './CategoryItem';

const Categories = ({categories}) => {
    return ( 
        <>
            <div className="category-menu-list">
                <ul>
                    {categories.map(item => (
                        <CategoryItem key={item.id} item={item} />
                    ))}
                    
                </ul>
            </div>

        </>
     );
}
 
export default Categories;