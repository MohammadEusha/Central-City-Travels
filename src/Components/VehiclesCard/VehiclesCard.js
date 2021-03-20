import React from 'react';
import { useHistory } from 'react-router';

const VehiclesCard = (props) => {
    const { vehicleType, image } = props.vehicle
    const cardStyle = {
        margin: '20px',
        borderRadius: '10px',
        height: '280px',
        width: '220px',
        float: 'left'
    }
    const history = useHistory()
    const handleBook = (vehicleType) => {
        history.push(`/book/${vehicleType}`)
    }
    return (
        <div>
            <div style={cardStyle} className="card d-flex align-items-center">
                <div>
                    <img src={image} style={{ height: '130px', width: '160px' }} className="card-img-top m-3 img-fluid " alt="..."></img>
                </div>

                <div className="card-body ">
                    <h5 className="card-title ">Ride Type : {vehicleType}</h5>
                    <button style={{ width: '200px' }} onClick={() => handleBook(vehicleType)} className="btn btn-secondary ">Book Your Ride</button>
                </div>
            </div>
        </div>
    );
};

export default VehiclesCard;