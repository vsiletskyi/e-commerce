import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => setProduct(data))
        .catch(error => console.log('Error fetching data', error))
    }, [id])

    if (!product) {
        return <p>Loading...</p>
      }

    return (
        <Product product={product} />
    )
}

export default ProductPage
