import React from 'react';

const Header = React.lazy(() => import('@widgets/Header/Header'));
const Footer = React.lazy(() => import('@widgets/Footer/Footer'));

export { Header, Footer };
