import React from 'react';
import Navigation from './Navigation';

function Header() {
    return(
        <header>
            <div class="title">
                <h1>Hi! I'm Katie</h1>
                <div class="quotation">
                    <h6 class="quote">"Design is not for philosophy - it's for life."</h6>
                    <em class="credit">Issey Miyake</em>
                </div>
            </div>
            <Navigation />
        </header>
    )
}

export default Header;