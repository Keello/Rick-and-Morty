import React from 'react';

const Layout = React.lazy(() => import('@pages/Layout/Layout'));
const MainPage = React.lazy(() => import('@pages/MainPage/MainPage'));
const CharacterPage = React.lazy(() => import('@pages/CharacterPage/CharacterPage'));

export { Layout, MainPage, CharacterPage };

export default MainPage;
