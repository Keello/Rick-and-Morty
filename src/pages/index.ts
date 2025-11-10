import React from 'react';

const MainPage = React.lazy(() => import('@pages/MainPage/MainPage'));
const CharacterPage = React.lazy(() => import('@pages/CharacterPage/CharacterPage'));

export { MainPage, CharacterPage };

export default MainPage;
