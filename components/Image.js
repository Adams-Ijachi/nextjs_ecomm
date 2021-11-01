import Image from 'next/image'

const Image = ({src}) => {
    return ( 
        <Image src="/images/logo.png" alt="Logo" width="200" height="200" />
     );
}
 
export default Image;