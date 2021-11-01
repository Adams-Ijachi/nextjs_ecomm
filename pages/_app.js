import MainLayout from '../layouts/MainLayout'
import Head from 'next/head'
import Script from 'next/script'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'


//     // <!-- Owl Carousel main css -->

// import '../public/css/owl.carousel.min.css'

// import  "../public/css/owl.theme.default.min.css"
//     // <!-- This core.css file contents all plugings css file. --
// import  "../public/css/core.css"
//     // <!-- Theme shortcodes/elements style --
// import  "../public/css/shortcode/shortcodes.css"

//     // <!-- Theme main style --
// import  "../public/css/style.css"

//     // <!-- Responsive css --
// import  "../public/css/responsive.css"

//     // <!-- User style --
// import  "../public/css/custom.css"


export default function MyApp({ Component, pageProps }) {
  return (
    
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>


 
  )
}