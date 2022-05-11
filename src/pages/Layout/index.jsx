import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from 'components/common/Header';

const Styled = {
  Wrapper: styled.div`
    width: 100%;
    height: 100vh;
  `,
  Content: styled.div`
    margin: 60px auto;
    max-width: 1260px;
  `,
};

const Layout = ({ children }) => {
  return (
    <Styled.Wrapper>
      <Header />
      <Styled.Content>{children}</Styled.Content>
    </Styled.Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
