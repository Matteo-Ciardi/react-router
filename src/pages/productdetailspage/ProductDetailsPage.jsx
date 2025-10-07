import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

const ProductDetailsPage = () => {

    const { id } = useParams();

    return (
        <>
            <h1>DETTAGLIO PRODOTTI</h1>
            
        </>
    )
}

export default ProductDetailsPage