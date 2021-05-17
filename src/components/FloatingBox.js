import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from './utils/Button';
import PriceText from './utils/PriceText';
import Flex from './utils/Flex';

import styled, { css } from 'styled-components';

const FloatingBoxWrapper = styled.div`
  position: sticky;
  top: 20%;
  width: 448px;
  height: 318px;
  margin: 120px 25px 120px 0;
  padding: 0 28px;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  background-color: inherit;
`;

const FloatingBoxHeader = styled.div`
  text-align: left;
  width: 100%;
  border-bottom: 3px solid #dddddd;
`;

const FloatingBoxTitle = styled.h3`
  font-weight: 400;
  font-size: 24px;
  margin: 28px 0 25px;
`;

const FloatingBoxText = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #333333;
  background: linear-gradient(to top, rgba(42, 193, 188, 0.5) 30%, transparent 50%);
`;

const PriceTextStyle = css`
  background: linear-gradient(to top, rgba(42, 193, 188, 0.5) 30%, transparent 50%);
`;

const StyledButton = styled(Button)`
  && {
    width: 100%;
    height: 73px;
    font-size: 24px;
    color: #ffffff;
    background-color: #2ac1bc;
    border: none;

    &:hover {
      font-weight: 700;
      cursor: pointer;
    }

    &:disabled {
      color: #ffffff;
      font-weight: inherit;
      background-color: #707a7a;
      border: none;
      cursor: not-allowed;
    }
  }
`;

const FloatingBoxContentWrapperStyle = css`
  width: 100%;
  height: 166px;
  margin: 35px 0;
`;

const FloatingBox = ({ price, selectedItemIds, linkPath, onClick, disabled, state }) => {
  return (
    <FloatingBoxWrapper>
      <FloatingBoxHeader>
        <FloatingBoxTitle>결제금액</FloatingBoxTitle>
      </FloatingBoxHeader>

      <Flex flexDirection="column" justifyContent="space-between" css={FloatingBoxContentWrapperStyle}>
        <Flex justifyContent="space-between">
          <FloatingBoxText>총 결제금액</FloatingBoxText>
          <PriceText fontSize="20px" fontWeight={700} css={PriceTextStyle}>
            {price}
          </PriceText>
        </Flex>

        <Link to={{ pathname: linkPath, state: state }}>
          {selectedItemIds ? (
            <StyledButton onClick={onClick} disabled={disabled}>
              주문하기 ({selectedItemIds.length}개)
            </StyledButton>
          ) : (
            <StyledButton onClick={onClick} disabled={price === 0}>
              결제하기{' '}
              <PriceText color="#ffffff" fontSize="24px" css={PriceTextStyle}>
                {price}
              </PriceText>
            </StyledButton>
          )}
        </Link>
      </Flex>
    </FloatingBoxWrapper>
  );
};

FloatingBox.propTypes = {
  price: PropTypes.number,
  selectedItemIds: PropTypes.array,
  linkPath: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default FloatingBox;
