import styles from './Product.module.scss'

const Product = ({product}) => {
  return (
    <div className={styles.product}>
        <div>
            <h3>
                {product.title}
            </h3>
        </div>
        <div className={styles.imgWrap}>
            <img src={product.image} alt="product" />
        </div>
        <div>
            {product.description}
        </div>
        <div>
            <p>Price: {product.price}</p>
        </div>
    </div>
  )
}

export default Product
