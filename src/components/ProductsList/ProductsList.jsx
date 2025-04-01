import { useEffect, useState } from 'react';

import styles from './ProductsList.module.scss'
import Product from '../Product/Product';

const ProductsList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.log('Error fetching data', error))
    }, [])
    
    return (
        <div className={styles.productsWrap}>
            {products.map((product, i) => {
                return (
                    <Product key={i} product={product} />
                )
            })}
        </div>
    )
}

export default ProductsList
