import { MainPage, CharacterPage } from '@pages/index';
import { Layout } from '@shared/components';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: MainPage },
      { path: 'character', Component: CharacterPage }
    ]
  }
]);
