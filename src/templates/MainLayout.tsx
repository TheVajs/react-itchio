import { Outlet } from 'react-router-dom';

import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';

const MainLayout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
