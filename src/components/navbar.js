import React from 'react';
import Home from './home'
function navbar(props) {
    const client_id = "6ce247f989b51b1c0e63";
    const redirect_uri = "https://github.com/";
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">ORIZON</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Technology</a>
                        </li>
                        <li className="dropdown nav-item">
                            <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                About
                                    </button>
                        </li>
                        <li className="dropdown nav-item">
                            <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Client
                                    </button>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Partner</a>
                        </li>
                        <li className="nav-item">

                            <a className="nav-link nav-item" href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
                            >Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    );
}

export default navbar;

