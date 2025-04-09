import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';

import styles from './ProductsList.module.scss'

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
                    <div key={i} className={styles.product}>
                        <Link to={`/product/${product.id}`}>
                            <Product product={product} />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductsList
