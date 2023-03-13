import { Outlet } from 'react-router-dom';
import { Navigation } from '../components/Navigation/Navigation';
import { Footer } from '../components/Footer/Footer';

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export { Layout };
