import React from 'react';
import Header from '../components/Header'
const Layout = ({ children }) => {
  return (
    <>
    <Header>

    </Header>
      {children}
    </>
  );
}

export default Layout;