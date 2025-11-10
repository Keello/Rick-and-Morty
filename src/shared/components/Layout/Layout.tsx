import { Footer, Header } from '@widgets/index';
import { Outlet } from 'react-router';
import styles from './Layout.module.scss';

export const Layout = () => {
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
