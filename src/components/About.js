import React from "react";
import Me from "../about_img.jpg"
function About(){
    return(
        <div id = "about" className= "container py-5">
            <div className = "row">
                <div className= "col-lg-6 col-xm-12">
                    {/* mb-5 and other vlaues bootstrap values */}
                    <div className = "photo-wrap mb-5">
                        <img className = "profile-img" src = {Me} alt = "author" />
                    </div>
                </div>
                <div className= "col-lg-6 col-xm-12">
                    <h1 className= "about-heading">ABOUT ME</h1>
                    <p>
                        Hi There, I’m Ajit and i am Front-End Web Developer. 
                        It's been 2 years, I’m working as web developer.
                        I have developed many website and also provided my services
                        to college students by getting their projects ready ASAP as 
                        a freelancer I have been part of some very good web design projects.
                        I'm also learning Back-End Development and looking forward to be a Full Stack Web Developer.
                        
                    </p>
                    <div>
                       <a href="https://drive.google.com/uc?export=download&id=1Yby6htN6kaecqpugEIATOckyzwrYy-8Q"><button type="button" className="btn btn-primary">DOWNLOAD CV</button></a>
                    </div>                    


                </div>

            </div>

        </div>

    )
}
export default About;