import React, { createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons'

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
                    <h3 className="text-primary">Central City Travels</h3>
                    <div className="d-flex flex-row-reverse" id="navbarNav">
                        <ul className="navbar-nav justify-content-end">
                            {display}
                            <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 text-dark ">
                                <Link style={{ textDecoration: 'none' }} to="/home">Home</Link>
                            </li>
                            <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 fw-bold">
                                <Link style={{ textDecoration: 'none' }} to="/destination">Destination</Link>
                            </li>
                            <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item  ">
                                <Link style={{ textDecoration: 'none' }} className="btn btn-secondary mt-1" to="/login"><FontAwesomeIcon icon={faUserPlus} />  Login</Link>
                            </li>
                            <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item">
                                <button className="btn btn-secondary mt-1" onClick={() => setLoggedInUser({})}><FontAwesomeIcon icon={faUserMinus} />  Sign out</button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;