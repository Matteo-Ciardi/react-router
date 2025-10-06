const ProductCard = (props) => {

    const { product } = props;

    return (
        <>
            <div className="product-card">
                <div>
                    <img src={product.image} alt={product.title} className="product-img" />
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