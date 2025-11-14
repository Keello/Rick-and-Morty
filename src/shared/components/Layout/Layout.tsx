import { Outlet } from 'react-router';

import { Footer, Header } from '@widgets/index';

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
