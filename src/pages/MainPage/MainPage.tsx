import { Logo, Select } from '@shared/ui';

const MainPage = () => {
  return (
    <section>
      <div className='container'>
        <Logo />

        <Select
          options={[
            {
              label: 'Human',
              value: 'Human'
            },
            {
              label: 'Alien',
              value: 'Alien'
            },
            {
              label: 'Humanoid',
              value: 'Humanoid'
            }
          ]}
        />
      </div>
    </section>
  );
};

export default MainPage;
