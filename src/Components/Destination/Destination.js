import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Destination.css'
import map from '../../images/Map.png'
import { useParams } from 'react-router';
import fakeData from '../fakeData/fakeData.json'

const Destination = () => {
    const { vehicleType } = useParams();

    const rideType = fakeData.find(vehicle => vehicle.vehicleType === vehicleType)

    const [bookVehicle, setBookVehicle] = useState(false)
    let display;
    let buttonText;
    if (bookVehicle) {
        display =
            <div>

                <div >
                    <img src={rideType && rideType.image} alt="" />
                    <h2>Ride Type : {rideType && rideType.vehicleType}</h2>
                    <h4>Passenger Number : {rideType && rideType.passengerNumber}</h4>
                    <h4>Total Const : ${rideType && rideType.price}</h4>
                </div>
            </div>
        buttonText = <p>Change Destination</p>
    }
    else {
        display =

            <div>
                <div className="input-group">
                    <label for="">Pick From</label>
                    <input className="inp-style" type="text" name="" placeholder="Mirpur" />
                </div>
                <div className="input-group">
                    <label for="">Pick To</label>
                    <input className="inp-style" type="text" name="" placeholder="Dhanmondi" />
                </div>
                <div className="inputs">
                    <div className="input-group">
                        <label for="">Booking Date</label>
                        <input className="inp-style" type="date" name="" />
                    </div>
                </div>

            </div>

        buttonText = <p>Confirm Your Ticket</p>

    }

    return (

        <div>
            <Navbar></Navbar>
            <div className="main-content container mt-5">
                <div id="booking-area" className="booking-form">
                    <h3>Booking Travels</h3>
                    {display}
                    <button style={{ width: '200px', height: '40px' }} className="btn btn-secondary" onClick={() => setBookVehicle(!bookVehicle)}>{buttonText}</button>
                </div>
                <div>
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Destination;