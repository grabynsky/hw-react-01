import React, {FC, ReactNode} from 'react';
import IProduct from '../../model/IProduct';

type ProductComponentWithChildren<T> = T & {children?: ReactNode};

const ProductComponent:FC<ProductComponentWithChildren<IProduct>> = ({id, title, description,price, rating }) => {
    return (
        <>
            <div>
                {id} - {title}
                <p>description: {description}</p>
            </div>

            <div>
                <p>
                    Price - {price}
                    Rating - {rating}
                </p>
                <hr/>
            </div>
        </>

    );
};

export default ProductComponent;
