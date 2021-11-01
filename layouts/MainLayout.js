import PopUpSearch from '../components/Search';
import Navbar from './../components/Navbar';
import Cart from './../components/Cart';
import Footer from '../components/Footer';



export default function MainLayout({ children }) {
    return (
      <>

        <div className="wrapper fixed__footer">
        <Navbar />

        <div className="body__overlay"></div>

        <div className="offset__wrapper">
            <PopUpSearch />
            <Cart />
        </div>

        {children}
        </div>

        <Footer />
 
      

      </>
    )
  }
