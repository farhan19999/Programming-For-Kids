// Arif

import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />

      <header className=" text-white text-center py-5" style={{background:"#222"}}>
        <div className="container">
          <h1 style={{ marginTop: "60px" }} className="display-4">
            Welcome to Programming For Kids
          </h1>
          <p style={{ marginTop: "60px" }} className="lead">
            Embark on an exciting coding journey designed especially for kids!
            Our platform offers a dynamic and interactive way to learn coding and
            programming concepts. Get ready to unleash your creativity and
            problem-solving skills through engaging challenges and projects.
          </p>
        </div>
      </header>

      <div className="container my-5">
        <h2 className="text-center mb-4">Explore</h2>
        <div className="row">
          <div className="col-md-4">
            <div
              className="card  text-white mb-4"
              style={{ height: "100%", background:"#222" }}
            >
              <div className="card-body">
                <h5 className="card-title">Contest</h5>
                <p className="card-text">
                  Enhance your coding prowess by participating in our thrilling
                  coding contests and challenges. Test your skills against
                  fellow coding enthusiasts and push your limits to emerge
                  victorious. Stay tuned for a variety of contests that cater to
                  different skill levels and interests.
                </p>
              </div>
              <div className="card-footer text-center">
                <Link to="/user/1/contests/" className="btn btn-dark">
                  View Contests
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card  text-white mb-4"
              style={{ height: "100%",background:"#222" }}
            >
              <div className="card-body">
                <h5 className="card-title">Practice</h5>
                <p className="card-text">
                  Dive into the world of coding challenges and exercises to hone
                  your programming abilities. Our practice section offers a
                  diverse range of problems, from beginner to advanced levels,
                  ensuring that you can steadily improve your coding skills
                  through consistent practice.
                </p>
              </div>
              <div className="card-footer text-center">
                <Link to="/#" className="btn btn-dark">
                  Start Practicing
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card text-white mb-4"
              style={{ height: "100%",background:"#222" }}
            >
              <div className="card-body">
                <h5 className="card-title">Mini-Projects</h5>
                <p className="card-text">
                  Unleash your creativity by exploring and building mini coding
                  projects. From creating simple interactive games to crafting
                  useful tools, our mini-projects section is your canvas to
                  experiment with code and bring your imaginative ideas to life.
                </p>
              </div>
              <div className="card-footer text-center">
                <Link to="/miniproject" className="btn btn-dark">
                  Get Inspired
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">Engage</h2>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div
              className="card  text-white mb-4"
              style={{ height: "100%",background:"#222" }}
            >
              <div className="card-body">
                <h5 className="card-title">Daily Puzzle</h5>
                <p className="card-text">
                  Challenge your problem-solving skills with our daily coding
                  puzzles. Each day, we present you with a new intriguing puzzle
                  that requires your logical thinking and coding know-how to
                  crack. Sharpen your mind and have fun with our daily brain
                  teasers.
                </p>
              </div>
              <div className="card-footer text-center">
                <Link to="/daily-puzzle" className="btn btn-dark">
                  Solve Today's Puzzle
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card text-white mb-4"
              style={{ height: "100%",background:"#222" }}
            >
              <div className="card-body">
                <h5 className="card-title">Code Game</h5>
                <p className="card-text">
                  Immerse yourself in a world of gamified coding challenges! Our
                  Code Game section offers an interactive and engaging way to
                  learn coding concepts. Solve puzzles, complete coding quests,
                  and earn rewards as you progress. Dive into the excitement of
                  coding games and enhance your skills while having a blast.
                </p>
              </div>
              <div className="card-footer text-center">
                <Link to="/#" className="btn btn-dark">
                  Play Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
