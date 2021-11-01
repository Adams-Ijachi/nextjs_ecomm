import Document , {Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    
    render() {
        return (
            <Html>
                <Head class="no-js" lang="en">
                <meta charset="utf-8"/>
                <meta http-equiv="x-ua-compatible" content="ie=edge"/>
              
                <meta name="description" content=""/>
              
                
                
            

                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="stylesheet" href="/css/bootstrap.min.css" />
        
                <link rel="stylesheet" href="/css/owl.carousel.min.css" />
                <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
                
                <link rel="stylesheet" href="/css/core.css" />
            
                <link rel="stylesheet" href="/css/shortcode/shortcodes.css"/>
            
                <link rel="stylesheet" href="/css/style.css"/>
            
                <link rel="stylesheet" href="/css/responsive.css"/>
                
                <link rel="stylesheet" href="/css/custom.css"/>
                <script src="/js/vendor/modernizr-2.8.3.min.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />

                   
                </body>
                <script src="/js/vendor/jquery-1.12.0.min.js" ></script>
                    <script src="/js/bootstrap.min.js"></script>
                    
                    <script src="/js/plugins.js" ></script>
                    <script src="/js/slick.min.js" ></script>
                    <script src="/js/owl.carousel.min.js" ></script>
                
                    <script src="/js/waypoints.min.js" ></script>
                
                    <script src="/js/main.js" ></script>

           


            </Html>
        )
    }
}


export default MyDocument;