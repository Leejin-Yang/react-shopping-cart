import styled from 'styled-components';
import ImgWrapper from 'components/ImgWrapper';
import useCart from 'hooks/useCart';
import errorApiImg from 'assets/png/errorApiImg.png';
import spinner from 'assets/svg/spinner.svg';
import TitleHeader from 'components/TitleHeader';
import CartTable from 'components/CartTable';
import CartOrder from 'components/CartOrder';
import { useEffect, useState } from 'react';

const Cart = () => {
  const { getCartEffect, cartList, isLoading, isError } = useCart();
  getCartEffect();

  const initialIdList = cartList.map((item) => item.id);

  const [checkedIdList, setCheckedIdList] = useState(initialIdList);

  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    const initialIdList = cartList.map((item) => item.id);
    setCheckedIdList(initialIdList);
  }, [cartList]);

  useEffect(() => {
    const checkedItemList = cartList.filter(
      (item) =>
        checkedIdList.findIndex((checkedId) => item.id === checkedId) !== -1,
    );
    const totalPrice = checkedItemList.reduce((acc, cur) => {
      return acc + Number(cur.price * cur.cartQuantity);
    }, 0);
    setTotalPrice(totalPrice);
  }, [checkedIdList]);

  return (
    <Styled.CartSection>
      <TitleHeader>장바구니</TitleHeader>
      <Styled.FlexBetweenBox>
        {isLoading && (
          <ImgWrapper isMini="true" src={spinner} alt="로딩 스피너" />
        )}
        {isError && <ImgWrapper src={errorApiImg} alt="API 에러 이미지" />}
        {!isLoading && cartList && (
          <CartTable
            cartList={cartList}
            checkedIdList={checkedIdList}
            setCheckedIdList={setCheckedIdList}
          />
        )}

        <CartOrder totalPrice={totalPrice} totalCount={checkedIdList.length} />
      </Styled.FlexBetweenBox>
    </Styled.CartSection>
  );
};

const Styled = {
  CartSection: styled.section`
    padding: 24px 100px;
  `,
  FlexBetweenBox: styled.div`
    display: flex;
    justify-content: space-between;
  `,
};

export default Cart;
