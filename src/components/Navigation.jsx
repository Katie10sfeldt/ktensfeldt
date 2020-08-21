import React from 'react';

function Navigation() {
    return(
        <nav class="my-nav navbar navbar-expand-lg navbar-dark">
                <button class="navbar-toggler toggle-button" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon nav-icon"></span>
                  </button>
    
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="full-nav navbar-nav">
                        <li class="nav-item">
                            <a id="home-link" class="nav-link navi active" href="index.html">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a id="gal-link" class="nav-link navi" href="gallery.html">Gallery <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a id="cont-link" class="nav-link navi" href="contact.html">Contact <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navigation;