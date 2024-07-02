import React, {FC, useEffect, useState} from 'react';
import ProductComponent from "./components/product/ProductComponent";
import IProduct from './model/IProduct';



const  App: FC = () => {

    const [products, setProducts] = useState<IProduct[]>([]);


    useEffect(()=>{
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(value => {
            setProducts(value.products);

            })
    }, []);
    console.log(products.length)
  return (
    <>
        {
            products.map(({id, title, description,price, rating }) =>
                <ProductComponent
                    key = {id}
                    id = {id}
                    title={title}
                    description={description}
                    price={price}
                    rating={rating}
                />
            )
        }
    </>
  );
}

export default App;
