import React from 'react';

import Modal from 'components/Modal';
import FlexWrapper from 'components/FlexWrapper';
import MarginWrapper from 'components/MarginWrapper';
import Button from 'components/Button';
import Text from 'components/Text';

import ModalPortal from 'Portal';
import { useDispatch } from 'react-redux';
import { closeModal } from 'modules/modal';

function AlreadyCartModal() {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <ModalPortal>
      <Modal onClick={handleCloseModal}>
        <FlexWrapper
          flexFlow="column wrap"
          justifyContent="space-between"
          alignItems="center"
          alignContent="space-around"
        >
          <MarginWrapper marginLeft="240px">
            <Button onClick={handleCloseModal} fontSize="30px" fontWeight="100" border="none">
              X
            </Button>
          </MarginWrapper>
          <MarginWrapper marginTop="24px">
            <Text fontSize="18px" fontWeight="100">
              이미 장바구니에 있는 상품입니다.
            </Text>
          </MarginWrapper>
        </FlexWrapper>
      </Modal>
    </ModalPortal>
  );
}

export default AlreadyCartModal;
