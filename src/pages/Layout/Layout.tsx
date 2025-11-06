import { Footer, Header } from '@widgets/index';
import { Outlet } from 'react-router';
import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
