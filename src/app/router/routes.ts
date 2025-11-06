import { MainPage, Layout, CharacterPage } from '@pages/index';
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
