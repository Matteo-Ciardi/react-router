import './ProductCard.css'

const ProductCard = (props) => {

    const { product } = props;

    return (
        <>
            <div className="product-card">
                <div className='image-box'>
                    <img src={product.image} alt={product.title} className="product-image" />
                </div>
                <div className="product-info">
                    <p>
                        <strong>{product.title}</strong>
                    </p>
                    <p>
                        {product.category.toUpperCase()}
                    </p>
                    <p>
                        <strong>€ {product.price.toFixed(2)}</strong>
                    </p>
                </div>
            </div>
        </>
    )
}

export default ProductCard