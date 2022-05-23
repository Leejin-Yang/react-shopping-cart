import React from 'react';

import ProductCheckbox from 'containers/ProductCheckbox';
import Image from 'components/Image';
import BlackText from 'components/BlackText';
import TrashcanButton from 'containers/TrashcanButton';
import CartProductStyled from './style';
import MarginWrapper from 'components/MarginWrapper';
import FlexWrapper from 'components/FlexWrapper';
import QuantityInput from 'containers/QuantityInput';

function CartProduct({ id, imgSrc, title, total }) {
  return (
    <CartProductStyled>
      <FlexWrapper justifyContent="space-between">
        <div>
          <FlexWrapper>
            <MarginWrapper marginRight="15px">
              <ProductCheckbox productId={id} />
            </MarginWrapper>
            <MarginWrapper marginRight="20px">
              <Image src={imgSrc} width="144px" height="147px" alt="상품 이미지" />
            </MarginWrapper>
            <BlackText fontSize="20px" fontWeight="400">
              {title}
            </BlackText>
          </FlexWrapper>
        </div>
        <FlexWrapper flexDirection="column" alignItems="flex-end" justifyContent="space-between">
          <TrashcanButton productId={id} />
          <QuantityInput productId={id} />
          <BlackText fontSize="16px" fontWeight="400">
            {total.toLocaleString()}원
          </BlackText>
        </FlexWrapper>
      </FlexWrapper>
    </CartProductStyled>
  );
}

export default CartProduct;
