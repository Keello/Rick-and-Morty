import { createBrowserRouter } from 'react-router';

import { CharacterPage, MainPage, Page404 } from '@pages/index';
import { Layout } from '@shared/components';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: MainPage },
      { path: 'character', Component: CharacterPage },
      {
        path: '*',
        Component: Page404
      }
    ]
  }
]);
