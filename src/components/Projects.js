import React from "react"
import Project1 from "../Color_guessing_game.png"
import Project2 from "../Face_recognition.jpeg"
import Project3 from "../Personal_portfolio.jpeg"
import Project4 from "../object_detection.jpeg"
import Project5 from "../To-do-list.png"

const Projects = () => {
    return (
        <div className="container">
          <div className = "d-flex justify-content-center my-5">
              <h1 className="h1_color">LATEST PROJECTS</h1>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img src={Project1} className="card-img-top" alt="color-guesing-game"/>
                <div className="card-body">
                  <h5 className="card-title">Color Guessing Game</h5>
                  <p className="card-text">This is a Color guessing game in which you can guess the right color .</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={Project2} className="card-img-top" alt="Face_recognition"/>
                <div className="card-body">
                  <h5 className="card-title">Face Recognition & Attandence Project</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={Project3} className="card-img-top" alt="Personal_portfolio"/>
                <div className="card-body">
                  <h5 className="card-title">Personal Portfolio</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={Project4} className="card-img-top" alt="object_detection"/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={Project5} className="card-img-top" alt="To-do-list"/>
                <div className="card-body">
                  <h5 className="card-title">To-Do-List</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={Project4} className="card-img-top" alt="object_detection"/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Projects
