import { useState } from 'react';

import './DetailCard.css'
import ShoppingBag from '../../pages/shoppingbag/ShoppingBag';

const DetailCard = (props) => {

    const { detail } = props;

    const [buyed, setBuyed] = useState([]);
    const [showBags, setShowBags] = useState(false);

    function sendItem() {
        const addBag = [...buyed,
        { image: detail.image, title: detail.title, price: detail.price }
        ];
        setBuyed(addBag);
        setShowBags(true);
    }

    return (
        <>
            <div className="detail-card">
                <div className='detail-image-box'>
                    <img src={detail.image} className="detail-image"></img>
                </div>
                <div className='detail-info'>
                    <h1 className='detail-title'>{detail.title}</h1>

                    <p className="detail-rating">
                        <i className="fa-solid fa-star" style={{ color: "#e6da00ff" }}></i> {detail.rating?.rate} / 5
                        <span className="rating-count"> ({detail.rating?.count} recensioni)</span>
                    </p>

                    <div className='buy'>
                        <p className='detail-price'>€ {detail.price.toFixed(2)}</p>
                        <button className='buy-button'
                            onClick={sendItem}>ACQUISTA</button>

                        {showBags &&
                            buyed.map((e, index) => (

                                <ShoppingBag
                                    key={index}
                                    e={e} />

                            ))

                        }
                    </div>

                    <p className='detail-description'><strong>INFORMAZIONI:</strong><br />
                        {detail.description}</p>

                </div>
            </div>
        </>
    )
}

export default DetailCard

