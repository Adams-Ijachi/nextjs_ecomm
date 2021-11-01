import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return ( 
                 
            <header id="header" className="htc-header header--3 bg__white">
                {/* Start Mainmenu Area --> */}
            <div id="sticky-header-with-topbar" className="mainmenu__area sticky__header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-lg-2 col-sm-3 col-xs-3">
                            <div className="logo">

                            <Link href="/">
                                <a >
                                    <img src="images/logo/logo.png" alt="logo" />
                                </a>
                            </Link>
                            </div>
                        </div>
                            {/* Start MAinmenu Ares --> */}
                        <div className="col-md-8 col-lg-8 col-sm-6 col-xs-6">
                            <nav className="mainmenu__nav hidden-xs hidden-sm">
                                <ul className="main__menu">
                                    <li className="drop">
                                        <Link href="/">
                                        <a >Home</a>
                                        </Link>
                                    </li>
                                  

                                   
                                    <li className="drop"><a href="shop.html">Shop</a>
                                    </li>
                                 
                                    <li><a href="contact.html">contact</a></li>
                                </ul>
                            </nav>
                            <div className="mobile-menu clearfix visible-xs visible-sm">
                                <nav id="mobile_dropdown">
                                    <ul>
                                        <li>
                                        <Link href="/">
                                            <a >Home</a>
                                        </Link>
                                        </li>
                                        <li><a href="blog.html">Shop</a></li>
                                      
                                        <li><a href="contact.html">contact</a></li>
                                    </ul>
                                </nav>
                            </div>                          
                        </div>
                            {/* End MAinmenu Ares --> */}
                        <div className="col-md-2 col-sm-4 col-xs-3">  
                            <ul className="menu-extra">
                                <li className="search search__open hidden-xs"><span className="ti-search"></span></li>
                                <li><a href="login-register.html"><span className="ti-user"></span></a></li>
                                <li className="cart__menu"><span className="ti-shopping-cart"></span></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="mobile-menu-area"></div>
                </div>
            </div>
                {/* End Mainmenu Area --> */}
            </header>
   
 );
}
 
export default Navbar;