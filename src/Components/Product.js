import React from 'react';

function Product(props) {
  const { id, name, description, price, image } = props.product;

  return (
    <div className="product">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Preço: R$ {price.toFixed(2)}</p>
      <button>Adicionar ao Carrinho</button>
    </div>
  );
}

export default Product;
