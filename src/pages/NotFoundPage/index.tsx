import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HomeButtonImage from 'assets/image/home_button.png';
import NotFoundImage from 'assets/image/not_found.png';

import Flex from 'components/@common/Flex';

const NotFound = () => {
  return (
    <Styled.Container>
      <Flex direction="column" justify="center" align="center" gap="40px">
        <img src={NotFoundImage} alt="사용자가 잘못된 경로로 들어왔을 시 나타나는 이미지" />
        <Styled.TextBox>
          이용에 불편을 드려 죄송합니다.
          <br /> 홈페이지로 이동하시어 서비스를 다시 이용해주세요.
        </Styled.TextBox>
        <Link to="/">
          <img src={HomeButtonImage} alt="홈으로 이동할 수 있는 이미지" />
        </Link>
      </Flex>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    > div {
      height: calc(100vh - 200px);
    }
  `,
  TextBox: styled.div`
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.4;
  `,
};

export default NotFound;
