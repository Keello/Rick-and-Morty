import styles from './Header.module.scss';
import Logo from '@assets/images/logo_sm.svg?react';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <Logo />
      </div>
    </header>
  );
};
