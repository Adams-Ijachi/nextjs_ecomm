

const Footer = () => {
    return ( 
        
      
       <footer className="htc__foooter__area gray-bg">
       <div className="container">
           <div className="row">
               <div className="footer__container clearfix">
                        {/* Start Single Footer Widget --> */}
                   <div className="col-md-3 col-lg-3 col-sm-6">
                       <div className="ft__widget">
                           <div className="ft__logo">
                               <a href="index.html">
                                   {/* <img src="images/logo/logo.png" alt="footer logo" > */}
                               </a>
                           </div>
                           <div className="footer-address">
                               <ul>
                                   <li>
                                       <div className="address-icon">
                                           <i className="zmdi zmdi-pin"></i>
                                       </div>
                                       {/* <div className="address-text">
                                           <p>194 Main Rd T, FS Rayed <br> VIC 3057, USA</p>
                                       </div> */}
                                   </li>
                                   <li>
                                       <div className="address-icon">
                                           <i className="zmdi zmdi-email"></i>
                                       </div>
                                       <div className="address-text">
                                           <a href="#"> info@example.com</a>
                                       </div>
                                   </li>
                                   <li>
                                       <div className="address-icon">
                                           <i className="zmdi zmdi-phone-in-talk"></i>
                                       </div>
                                       <div className="address-text">
                                           <p>+012 345 678 102 </p>
                                       </div>
                                   </li>
                               </ul>
                           </div>
                           <ul className="social__icon">
                               <li><a href="#"><i className="zmdi zmdi-twitter"></i></a></li>
                               <li><a href="#"><i className="zmdi zmdi-instagram"></i></a></li>
                               <li><a href="#"><i className="zmdi zmdi-facebook"></i></a></li>
                               <li><a href="#"><i className="zmdi zmdi-google-plus"></i></a></li>
                           </ul>
                       </div>
                   </div>
                       {/* End Single Footer Widget -->
                       Start Single Footer Widget --> */}
                   <div className="col-md-3 col-lg-2 col-sm-6 smt-30 xmt-30">
                       <div className="ft__widget">
                           <h2 className="ft__title">Categories</h2>
                           <ul className="footer-categories" >
                               <li><a href="shop-sidebar.html">Men</a></li>
                               <li><a href="shop-sidebar.html">Women</a></li>
                               <li><a href="shop-sidebar.html">Accessories</a></li>
                               <li><a href="shop-sidebar.html">Shoes</a></li>
                               <li><a href="shop-sidebar.html">Dress</a></li>
                               <li><a href="shop-sidebar.html">Denim</a></li>
                           </ul>
                       </div>
                   </div>
                       {/* Start Single Footer Widget --> */}
                   <div className="col-md-3 col-lg-2 col-sm-6 smt-30 xmt-30">
                       <div className="ft__widget">
                           <h2 className="ft__title">Infomation</h2>
                           <ul className="footer-categories" >
                               <li><a href="about.html">About Us</a></li>
                               <li><a href="contact.html">Contact Us</a></li>
                               <li><a href="#">Terms & Conditions</a></li>
                               <li><a href="#">Returns & Exchanges</a></li>
                               <li><a href="#">Shipping & Delivery</a></li>
                               <li><a href="#">Privacy Policy</a></li>
                           </ul>
                       </div>
                   </div>
                       {/* Start Single Footer Widget --> */}
                   <div className="col-md-3 col-lg-3 col-lg-offset-1 col-sm-6 smt-30 xmt-30">
                       <div className="ft__widget">
                           <h2 className="ft__title">Newsletter</h2>
                           <div className="newsletter__form">
                               <p>Subscribe to our newsletter and get 10% off your first purchase .</p>
                               <div className="input__box">
                                   <div id="mc_embed_signup">
                                       <form action="#" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" >
                                           <div id="mc_embed_signup_scroll" className="htc__news__inner">
                                               <div className="news__input">
                                                   <input type="email"  name="EMAIL" className="email" id="mce-EMAIL" placeholder="Email Address" required />
                                               </div>
                                                   {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                                               <div  aria-hidden="true"><input type="text" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"   /></div>
                                               <div className="clearfix subscribe__btn"><input type="submit"  name="subscribe" id="mc-embedded-subscribe" className="bst__btn btn--white__color" />
                                                   
                                               </div>
                                           </div>
                                       </form>
                                   </div>
                               </div>        
                           </div>
                       </div>
                   </div>
                       {/* End Single Footer Widget --> */}
               </div>
           </div>
               {/* Start Copyright Area --> */}
           <div className="htc__copyright__area">
               <div className="row">
                   <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                       <div className="copyright__inner">
                           <div className="copyright">
                               <p>© 2017 <a href="https://freethemescloud.com/">Free themes Cloud</a>
                               All Right Reserved.</p>
                           </div>
                           <ul className="footer__menu">
                               <li><a href="index.html">Home</a></li>
                               <li><a href="shop.html">Product</a></li>
                               <li><a href="contact.html">Contact Us</a></li>
                           </ul>
                       </div>
                   </div>
               </div>
           </div>
               {/* End Copyright Area --> */}
       </div>
   </footer>
       
     );
}
 
export default Footer;