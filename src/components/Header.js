import React from "react"
import Typed from "react-typed";

const Header = () => {
    return (

            <div id="home"className="head_wrapper">
                <div className="info">
                    <h1>HI, I AM AJIT KUMAR</h1>
                    <h2>Front-End Developer</h2> 
                    <Typed
                        className="typed-content"
                        strings={["Javascript", "React", "Python", "jQuery","Html", "Css", "Bootstrap","Express", "Nodejs","MongoDB"]}
                        typeSpeed={50}
                        backSpeed={50}
                        loop
                        />
                </div>
                
            </div>
        

    )
}

export default Header
