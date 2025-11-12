import { Logo } from '@shared/ui';
import { useNavigate } from 'react-router';
import styles from './Header.module.scss';

export const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className={styles.header}>
      <div className='container'>
        <Logo
          className={styles.header__logo}
          onClick={handleLogoClick}
          size='small'
        />
      </div>
    </header>
  );
};
