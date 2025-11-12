import React from 'react';

const MainPage = React.lazy(() => import('@pages/MainPage/MainPage'));
const CharacterPage = React.lazy(() => import('@pages/CharacterPage/CharacterPage'));
const Page404 = React.lazy(() => import('@pages/Page404/Page404'));

export { MainPage, CharacterPage, Page404 };

export default MainPage;
