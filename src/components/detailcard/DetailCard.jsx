import './DetailCard.css'

const DetailCard = (props) => {

    const { detail } = props;

    return (
        <>
            <div className="detail-card">
                <div>
                    <img src={detail.image}></img>
                </div>
            </div>
        </>
    )
}

export default DetailCard