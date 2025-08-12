import Header from './Header';
import Navigation from './Navigation';
import Footer from "./Footer";
import {Outlet} from 'react-router-dom';

export default function Layout(){
    return (
        <>
          <header>
            <Header />
            <Navigation />
          </header>
          
          <main>
            <Outlet />
          </main>

          <footer>
            <Footer />
          </footer>
        </>
    )
}