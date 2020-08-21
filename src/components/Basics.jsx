import React from 'react';

function Basics() {
    return(
        <section class="basics">
            <div class="section-head"> 
                <h2>Who am I?</h2>
                <h3>The basics</h3>
            </div>
            <div class="container basic-box">
                <div class="row basic-list">
                    <div class="basic-item col-lg-4">
                        <ion-icon name="code-slash-outline"></ion-icon>
                        <div class="descrip">
                            <p>Front End Web Developer familiar with HTML5, CSS3, and JavaScript with multiple frameworks under my belt.</p>
                        </div>
                    </div>
                    <div class="basic-item col-lg-4">
                        <ion-icon name="color-palette-outline"></ion-icon>
                        <div class="descrip">
                            <p>Creative type with keen eye for color and designs. </p>
                        </div>
                    </div>
                    <div class="basic-item col-lg-4">
                        <ion-icon name="sunny-outline"></ion-icon>
                        <div class="descrip">
                            <p>Friendy, happy and energetic - I bring a positive energy to my workplace.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Basics;