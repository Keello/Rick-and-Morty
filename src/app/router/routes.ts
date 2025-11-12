import { MainPage, CharacterPage, Page404 } from '@pages/index';
import { Layout } from '@shared/components';
import { createBrowserRouter } from 'react-router';

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
