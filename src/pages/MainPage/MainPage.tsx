import { useState } from 'react';

import { Logo, Select } from '@shared/ui';

const MainPage = () => {
  const [select, setSelect] = useState<string | null>(null);

  return (
    <section>
      <div className='container'>
        <Logo />

        <Select
          allowClear
          value={select}
          onChange={(val) => {
            setSelect(val);
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
          renderOption={(option) => (
            <>
              test:
              {option.value}
              <div style={{ width: '20px', height: '20px', background: 'green' }} />
            </>
          )}
        />
      </div>
    </section>
  );
};

export default MainPage;
