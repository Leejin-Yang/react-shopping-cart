import { styled } from 'styled-components';

import ProductItem from './ProductItem';

import type { Product } from '../../types/product';

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <ProductListContainer>
      {products.map((product) => (
        <li key={product.id}>
          <ProductItem product={product} />
        </li>
      ))}
    </ProductListContainer>
  );
};

const ProductListContainer = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 282px);
  grid-row-gap: 84px;
  grid-column-gap: 48px;
`;

export default ProductList;
