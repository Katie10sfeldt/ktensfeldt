import React from 'react';

export default function About() {
    return(
        <section class="knowledge">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="Images/comp.jpg" class="comp-image d-block w-100" alt="Computer" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Front End Development</h5>
                        <p class="car-caption">I'm comfortable taking webpages from concept to full launch, using a variety of libraries and frameworks.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="Images/colab.jpg" class="colab-image d-block w-100" alt="Puzzle" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Collaboration - Teamwork</h5>
                        <p class="car-caption"> I am very comfortable working in a team environment to complete products. I'm not afraid to work on my own, but am great at asking for help if needed.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="Images/color.jpg" class="color-image d-block w-100" alt="Color palette" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Creativity</h5>
                        <p class="car-caption">I'm familiar with UI/UX concepts and best practices</p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

        </section>
    );
}