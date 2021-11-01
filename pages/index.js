// import { Modal } from 'bootstrap';
import Head from 'next/head'
import Categories from '../components/index/Categories'
import Products from './../components/index/Products';
import Modal from './../components/index/Modal';
import { useState } from 'react';

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const host = process.env.BASEURL
  const res = await fetch(`${host}products`)
  const data = await res.json()

  return {
    props: {
      data : data
    },
  }
}

export default function Home({ data }) {
    const {products, categories} = data 
    const [modal, setModal] = useState(false)
    const [product, setProduct] = useState()

    console.log(categories,'cate')

    const handleModal = (product) => {
        console.log(product,'product')
        setModal(true)
        setProduct(product)
    }

  return (

  <>
        {/*   Start Feature Product --> */}
       <section className="categories-slider-area bg__white">
           <div className="container">
               <div className="row">
                       {/* Start Left Feature --> */}
                   <div className="col-md-9 col-lg-9 col-sm-8 col-xs-12 float-left-style">
                           {/* Start Slider Area --> */}
                       <div className="slider__container slider--one">
                           <div className="slider__activation__wrap owl-carousel owl-theme">
                                   {/* Start Single Slide --> */}
                               <div className="slide slider__full--screen slider-height-inherit slider-text-right" style={{ background: "rgba(0, 0, 0, 0) url(/images/slider/bg/1.png) no-repeat scroll center center / cover "}} >
                                   <div className="container">
                                       <div className="row">
                                           <div className="col-md-10 col-lg-8 col-md-offset-2 col-lg-offset-4 col-sm-12 col-xs-12">
                                               <div className="slider__inner">
                                                   <h1>New Product <span className="text--theme">Collection</span></h1>
                                                   <div className="slider__btn">
                                                       <a className="htc__btn" href="cart.html">shop now</a>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                                   {/* End Single Slide -->
                                   Start Single Slide --> */}
                             
                                   {/* End Single Slide --> */}
                           </div>
                       </div>
                           {/* Start Slider Area --> */}
                   </div>
                   <div className="col-md-3 col-lg-3 col-sm-4 col-xs-12 float-right-style">
                       <div className="categories-menu mrg-xs">
                           <div className="category-heading">
                              <h3> Browse Categories</h3>
                           </div>

                           {categories && <Categories categories={categories} />}
                            
                           
                       </div>
                   </div>
                       {/* End Left Feature --> */}
               </div>
           </div>
       </section>
           {/* End Feature Product --> */}
       <div className="only-banner ptb--100 bg__white">
           <div className="container">
               <div className="only-banner-img">
                   <a href="shop-sidebar.html"><img src="images/new-product/3.jpg" alt="new product" /></a>
               </div>
           </div>
       </div>

           {/* Start Our Product Area -->/ */}
       <section className="htc__product__area ptb--100 bg__white">
           <div className="container">
               <div className="row">
                   <div className="col">
                       <div className="product-style-tab">
                           <div className="product-tab-list">
                                   {/* Nav tabs --> */}
                               <ul className="tab-style product-tab-list-btn" role="tablist">
                                   <li className="active">
                                       <a href="#home9" data-toggle="tab">
                                           <div className="tab-menu-text">
                                               <h4>latest </h4>
                                           </div>
                                       </a>
                                   </li>
                                   <li>
                                       <a href="#home10" data-toggle="tab">
                                           <div className="tab-menu-text">
                                               <h4>best sale </h4>
                                           </div>
                                       </a>
                                   </li>
                                   <li>
                                       <a href="#home11" data-toggle="tab">
                                           <div className="tab-menu-text">
                                               <h4>top rated</h4>
                                           </div>
                                       </a>
                                   </li>
                                   <li>
                                       <a href="#home12" data-toggle="tab">
                                           <div className="tab-menu-text">
                                               <h4>on sale</h4>
                                           </div>
                                       </a>
                                   </li>
                               </ul>
                               <div className="all-product-btn">
                                   <a href="shop-sidebar.html">all</a>
                               </div>
                           </div>
                            {products ? (
                                <Products products={products} onClick={handleModal} />
                            ) : ( <div>Loading...</div> )}
                            
                       </div>
                   </div>
               </div>
           </div>
       </section>

    {  modal ?  < Modal product={product} /> : 'hh' }

       
</>
  )
}


