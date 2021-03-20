import React, { createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    let display;
    if (loggedInUser) {
        display = <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2">
            {loggedInUser.displayName}
        </li>
    }

    return (
        <div>
            <nav className="d-flex navbar navbar-expand-lg">
                <div style={{ marginTop: '30px' }} className="container-fluid">
                    <h3>Central City Travels</h3>
                    <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
                        <ul className="navbar-nav justify-content-end">
                            {display}
                            <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 text-dark ">
                                <Link to="/home">Home</Link>
                            </li>
                            <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 fw-bold">
                                <Link to="/destination">Destination</Link>
                            </li>
                            <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 ">
                                <Link to="/login">Login</Link>
                            </li>
                            <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item">
                                <button className="btn btn-secondary" onClick={() => setLoggedInUser({})}>Sign out</button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;