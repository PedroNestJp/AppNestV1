import React from 'react';
import Product from './Product';

function ProductList() {
  const products = [
    {
      id: 1,
      name: 'Produto 1',
      description: 'Descrição do Produto 1',
      price: 100.00,
      image: 'https://picsum.photos/200',
    },
    {
      id: 2,
      name: 'Produto 2',
      description: 'Descrição do Produto 2',
      price: 200.00,
      image: 'https://picsum.photos/200',
    },
    {
      id: 3,
      name: 'Produto 3',
      description: 'Descrição do Produto 3',
      price: 300.00,
      image: 'https://picsum.photos/200',
    },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
