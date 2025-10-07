import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import DetailCard from "../../components/detailcard/DetailCard";

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
                {detail ? (<DetailCard 
                                key={id}
                                detail={detail}/>)
                    : (<p>Loading...</p>)}
            </div>
        </>
    )

}