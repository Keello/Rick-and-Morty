import React from 'react';

const MainPage = React.lazy(() => import('./MainPage/MainPage'));
const CharacterPage = React.lazy(() => import('./CharacterPage/CharacterPage'));
const Page404 = React.lazy(() => import('./Page404/Page404'));

export { MainPage, CharacterPage, Page404 };

export default MainPage;
