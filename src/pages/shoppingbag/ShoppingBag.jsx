// import DetailCard from "../../components/detailcard/DetailCard";

const ShoppingBag = (props) => {

    const { e } = props;


    return (
        <>
            <div>Questo è il carrello</div>
            <ul>
                <li>{e.title}</li>
                <li>{e.image}</li>
                <li>{e.price}</li>
                <li>item hP</li>
                <li>item hP</li>
            </ul>
        </>
    )
}

export default ShoppingBag