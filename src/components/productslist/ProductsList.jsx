import { useState, useEffect } from 'react';

import ProductCard from '../productcard/ProductCard';

export default function ProductsList() {
    const [products, setProducts] = useState([]);

    function fetchProducts() {
        axios.get("https://fakestoreapi.com/products")
            .then((result) => setProducts(result.data))
            .catch(error => console.log(error)
            )
    }

    useEffect(() => {
        fetchProducts()
    }
        , [])

    return (
        <>
            <div className='products'>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </>
    )
}