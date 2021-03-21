import React, { useEffect, useState } from 'react';
import fakeData from '../fakeData/fakeData.json'
import Navbar from '../Navbar/Navbar';
import img from '../../images/Bg.png'
import VehiclesCard from '../VehiclesCard/VehiclesCard';

const Home = () => {
    const [vehicles, setVehicles] = useState([])
    useEffect(() => {
        console.log(fakeData)
        setVehicles(fakeData)
    }, [])

    return (
        <div >
            <img className="App" src={img} alt="" />
            <Navbar></Navbar>
            <div style={{ marginTop: '300px' }} className="container ">
                <div className="row">
                    <div className="col-sm">
                        {
                            vehicles.map(vehicle => <VehiclesCard vehicle={vehicle}></VehiclesCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;