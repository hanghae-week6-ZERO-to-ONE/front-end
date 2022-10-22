import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return <Layoutdiv>{children}</Layoutdiv>;
};
export default Layout;
const Layoutdiv = styled.div`
  width: 1280px;
  min-height: 100vh;
  margin: 20px auto;
`;
