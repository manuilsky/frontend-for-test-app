import React, {useEffect, useState} from 'react';
import ProductItem, {IProductItemProps} from "./ProductItem";

const Products: React.FC = () => {
  const [data, setData] = useState<IProductItemProps[]>([]);

  const fetchData = () => {
    fetch('https://testbackend.nc-one.com/image')
        .then(res => res.json())
        .then(data => setData(data))
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <>
        <h1>Уже добавленные продукты</h1>
        <div className={"products"}>
          {data ? data.map(item => (
              <ProductItem key={item.id} {...item} />
          )) : (
              <div>Загрузка...</div>
          )}
        </div>
      </>
  );
};

export default Products;