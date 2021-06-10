import React from 'react';
import logo from '../../images/online-courses-logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12 col-sm-12 col-12 mt-3">
                    <img src={logo} alt="logo" />
                    <div className="link-container">
                        <ul className="nav justify-content-center mt-4">
                            <li className="nav-item">
                                <a className="nav-link activate" aria-current="page" href="#">Courses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/order">Order Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/manage">Manage Orders</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;