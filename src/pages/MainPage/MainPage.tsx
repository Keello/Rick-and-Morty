import { useState } from 'react';

import { Logo, Select, Status } from '@shared/ui';

const MainPage = () => {
  const [select, setSelect] = useState<string | null>(null);

  return (
    <section>
      <div className='container'>
        <Logo />
        <Status label='test label' />
        <Status
          label='test label'
          type='warning'
          size={20}
        />
        <Status
          label='error label'
          type='error'
          size={30}
        />
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
        />
        <div style={{ marginTop: '20px' }} />
        <Select
          allowClear
          value={select}
          size='small'
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
              custom:
              <span style={{ margin: '0px 5px' }}>{option.value}</span>
              <Status />
            </>
          )}
        />
      </div>
    </section>
  );
};

export default MainPage;
