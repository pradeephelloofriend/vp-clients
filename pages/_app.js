
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
//import '../public/css/plugins.css';
import '../public/css/style.css';
import '../public/css/font.awesome.css'
import '../public/css/custom.css';
import '../public/css/fontello.css';
//import '../public/css/flaticon.css';
//import '../public/css/animate.css'
import "swiper/css/bundle";
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { wrapper } from '../redux/store';
import { withRouter, Router } from 'next/router'
import SimpleReactLightbox from 'simple-react-lightbox'
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import MainLayout from '../components/layout/MainLayout';
import Nav from '../components/header/NavbarComponent';
import TopHeaderAreaComponent from '../components/header/TopHeaderAreaComponent';
import Footer from '../components/footer/Footer';

Router.events.on('routeChangeStart', (url) => {
    //console.log(`Loading: ${url}`)
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
function MyApp({ Component, pageProps }) {
    const store = useStore((state) => state);
    return (
        <PersistGate persistor={store.__persistor} >
            <SimpleReactLightbox>
                <MainLayout>
                    <TopHeaderAreaComponent/>
                    <Nav/>
                    <Component {...pageProps} />
                   {/* <Footer/>*/}
                </MainLayout>
            </SimpleReactLightbox>
        </PersistGate>
                    
    ) 


}
MyApp.getInitialProps = async ({ Component, ctx }) => {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps: pageProps };
}
export default withRouter(wrapper.withRedux(MyApp))