import React from 'react';
import styled from 'styled-components';
import Login from '../../components/login/Login';

import login_background from '../../images/login/login_background.png';

const LoginPage = ({}) => {
  return (
    <>
      <LoginBackImageDiv>
        <LoginBackImage src={login_background} />

        <Login />
      </LoginBackImageDiv>
    </>
  );
};
export default LoginPage;

const LoginBackImageDiv = styled.div`
  overflow: hidden;
  height: 100vh;
`;

const LoginBackImage = styled.img`
  height: 100%;
`;
