import useReduxState from 'hooks/useReduxState';
import { getCartItemAsync } from 'reducers/cart/cart.thunk';
import { setCart } from 'reducers/cart/cart.actions';
import { METHOD } from 'constants';
import useFetch from 'hooks/useFetch';

const useCart = () => {
  const {
    dispatch,
    state: { isLoading, isError, data },
  } = useReduxState('cart');

  const { fetchApi: deleteItemApi } = useFetch({
    method: METHOD.DELETE,
    url: '/cart',
    handler: (data) => dispatch(setCart(data)),
  });

  const { fetchApi: updateItemApi } = useFetch({
    method: METHOD.PUT,
    url: '/cart',
    handler: (data) => dispatch(setCart(data)),
  });

  const { fetchApi: addItemApi } = useFetch({
    method: METHOD.POST,
    url: '/cart',
    handler: (data) => dispatch(setCart(data)),
  });

  const getItems = () => {
    dispatch(getCartItemAsync);
  };

  const deleteItem = (id) => {
    deleteItemApi(id);
  };

  const deleteItems = (idList) => {
    Promise.all(idList.forEach((id) => deleteItemApi(id)));
  };

  const updateItemQuantity = (id, quantity) => {
    updateItemApi(`${id}/${quantity}`);
  };

  const addItem = (id) => {
    addItemApi(id);
  };

  return {
    isLoading,
    isError,
    getItems,
    deleteItem,
    deleteItems,
    updateItemQuantity,
    addItem,
    cartItems: data,
  };
};

export default useCart;
