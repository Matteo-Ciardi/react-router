import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

export default function ProductDetailsPage() {
    const { id } = useParams();

    const [detail, setDetail] = useState();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => setDetail(response.data))
            .catch(() => { navigate("/prodotti") })
    }, [id])

    return (
        <>
            <div>
                {detail ? (<div>
                </div>)
                    : (<p>Loading...</p>)}
            </div>
        </>
    )

}