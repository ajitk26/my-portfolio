import React from "react"
import Project1 from "../Color_guessing_game.png"
import Project2 from "../Face_recognition.jpeg"
import Project3 from "../Personal_portfolio.jpeg"
import Project4 from "../object_detection.jpeg"
import Project5 from "../To-do-list.png"
import Project6 from "../bhp.png"

const Projects = () => {
    return (
        <div className="container">
          <div className = "d-flex justify-content-center my-5">
            <h1 className="h1_color">LATEST PROJECTS</h1>
          </div>
          <div id="projects" className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img src={Project1} className="card-img-top" alt="color-guesing-game"/>
                <div className="card-body">
                  <h5 className="card-title">Color Guessing Game</h5>
                  <p className="card-text">This is a Color guessing game in where you will be provided random RGB color and based on that RGB you have to guess the right color.</p>
                  <a href="https://github.com/ajitk26/Color-Game"><button type="button" class="btn btn-primary">KNOW MORE</button></a>

                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={Project2} className="card-img-top" alt="Face_recognition"/>
                <div className="card-body">
                  <h5 className="card-title">Face Recognition & Attandence Project</h5>
                  <p className="card-text">Face recognition is the technique in which the identity of a human being can be identified using ones individual face.</p>
                  <a href="https://github.com/ajitk26/Face-recognition-and-attendance-project"><button type="button" class="btn btn-primary">KNOW MORE</button></a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={Project3} className="card-img-top" alt="Personal_portfolio"/>
                <div className="card-body">
                  <h5 className="card-title">Personal Portfolio</h5>
                  <p className="card-text">This is my personal portfolio website where i host all the projects and show my abilities and skills React,javascript and firebase is used in this project.</p>
                  <a href="https://github.com/ajitk26/my-portfolio"><button type="button" class="btn btn-primary">KNOW MORE</button></a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={Project4} className="card-img-top" alt="object_detection"/>
                <div className="card-body">
                  <h5 className="card-title">Object Detection</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                  <button type="button" class="btn btn-primary">KNOW MORE</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={Project5} className="card-img-top" alt="To-do-list"/>
                <div className="card-body">
                  <h5 className="card-title">To-Do-List</h5>
                  <p className="card-text">This is a To-Do application where we can add our daily task.this application is made using html,css and javascript</p>
                  <a href="https://github.com/ajitk26/To-Do-List"><button type="button" class="btn btn-primary">KNOW MORE</button></a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={Project6} className="card-img-top" alt="object_detection"/>
                <div className="card-body">
                  <h5 className="card-title">Bengaluru Real Estate Price Prediction</h5>
                  <p className="card-text">This project aims to analyze  the accuracy of predicting house prices of banglore when using multiple linear,random forest regression algorithms and artificial neural network.</p>
                  <a href="https://github.com/ajitk26/Face-recognition-and-attendance-project"><button type="button" class="btn btn-primary">KNOW MORE</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Projects
