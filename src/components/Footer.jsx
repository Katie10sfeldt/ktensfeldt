
import React from 'react';

function Footer() {

    const year = new Date().getFullYear();

    return(
        <footer>
            <div class="socials">
                <ul class="social-list">
                    <li>
                        <a class="site logo-linked" href="https://www.linkedin.com/in/kathleentensfeldt/" target="_blank">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a class="site logo-git" href="https://github.com/Katie10sfeldt" target="_blank">
                            <ion-icon name="logo-github"></ion-icon>
                        </a>  
                    </li>
                    <li>
                        <a class="site logo-drib" href="https://dribbble.com/k10sfeldt" target="_blank">
                            <ion-icon name="logo-dribbble"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a class="site logo-code" href="https://codepen.io/k10sfeldt" target="_blank">
                            <ion-icon name="logo-codepen"></ion-icon>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="author">
                <p>Designed and Coded by: Katie Tensfeldt</p>
            </div>
            <div class="copyright">
                <p class="copyright">&copy; Copyright {year} Kathleen Tensfeldt</p>
            </div>
        </footer>
    )
}

export default Footer;