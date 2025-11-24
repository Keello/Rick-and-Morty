import clsx from 'clsx';
import { useNavigate } from 'react-router';

import { ArrowBack } from '@assets/icons';
import { Button, Logo } from '@shared/ui';

import styles from './Page404.module.scss';

const Page404 = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <section>
      <div className={clsx(styles.wrapper, 'container')}>
        <Button
          icon={<ArrowBack />}
          onClick={handleGoHome}
          className={styles.button}
        >
          go back
        </Button>

        <Logo className={styles.logo} />
        <p className={styles.text}>Такой страницы не существует...</p>
      </div>
    </section>
  );
};

export default Page404;
