import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';

const Layout = () => (
  <>
    <Header />

    <main>
      <Outlet />
    </main>

    <Footer />
  </>
);

export { Layout };
