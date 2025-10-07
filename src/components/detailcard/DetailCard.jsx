import './DetailCard.css'

const DetailCard = (props) => {

    const { detail } = props;

    return (
        <>
            <div className="detail-card">
                <div className='detail-image-box'>
                    <img src={detail.image} className="detail-image"></img>
                </div>
                <div className='detail-info'>
                    <h1 className='detail-title'>{detail.title}</h1>

                    <p className="detail-rating">
                        ⭐ {detail.rating?.rate} / 5
                        <span className="rating-count"> ({detail.rating?.count} recensioni)</span>
                    </p>

                    <div className='buy'>
                        <p className='detail-price'>€ {detail.price}</p>
                        <button className='buy-button'>ACQUISTA</button>
                    </div>

                    <p className='detail-description'>{detail.description}</p>

                </div>
            </div>
        </>
    )
}

export default DetailCard