import { useState } from 'react';

import { Logo, Select } from '@shared/ui';

const MainPage = () => {
  const [select, setSelect] = useState('');

  return (
    <section>
      <div className='container'>
        <Logo />

        <Select
          value={select}
          onChange={(val) => {
            setSelect(val.toString());
          }}
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
          RenderOption={({ option }) => (
            <>
              test:
              {option.value}
            </>
          )}
        />
      </div>
    </section>
  );
};

export default MainPage;
