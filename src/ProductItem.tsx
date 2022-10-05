import React from 'react';

export interface IProductItemProps {
  id: number;
  name: string;
  price: number;
  src: string;
}

const ProductItem: React.FC<IProductItemProps> = ({ name, price, src }) => {
  return (
      <div className="item">
        <img src={`https://testbackend.nc-one.com${src}`} alt={name} />
        <div>{name}</div>
        <div>{price}</div>
      </div>
  );
};

export default ProductItem;