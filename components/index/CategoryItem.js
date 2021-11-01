import Image from 'next/image'

const CategoryItem = ({item}) => {
    return ( 
        <li>
        <a href="#"><Image alt="" src="/images/icons/thum7.png" width={15} height={15} /> {item.name}</a>
        </li>
     );
}
 
export default CategoryItem;