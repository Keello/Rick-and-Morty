import Logo from '@assets/images/logo_lg.svg?react';
import { Loader } from '@shared/ui';

const MainPage = () => {
  return (
    <section>
      <Logo />
      <Loader
        size='large'
        label='some text for test'
      />
      <Loader
        size='small'
        label='some text for test'
      />
    </section>
  );
};

export default MainPage;
