import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <nav class="my-nav navbar navbar-expand-lg navbar-dark">
            <button class="navbar-toggler toggle-button" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon nav-icon"></span>
            </button>
    
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="full-nav navbar-nav">
                    <li class="nav-item navi">
                        <Link id="home-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item navi">
                        <Link id="gal-link" to="/About">About</Link>
                    </li>
                    <li class="nav-item navi">
                        <Link id="cont-link" to="/">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;