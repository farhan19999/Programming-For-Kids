
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { CodeBlock, dracula } from "react-code-blocks";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import moment from "moment";
import Loading from "../../components/loading/Loading";
import Confetti from "react-confetti";
import useWindowSize from 'react-use/lib/useWindowSize'
import {Modal} from 'react-bootstrap';


// const contentStyle = { background: '#000' };
// const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
// const arrowStyle = { color: '#000' }; // style for an svg element

export default function DailyPuzzle() {
  const [puzzle, setPuzzle] = useState(null);
  const server_url = process.env.REACT_APP_SERVER_URL;
  const todaywithzone = new Date();
  const today = moment(todaywithzone).format("YYYY-MM-DD");
  const [open, setOpen] = useState(false);
  const [popupText, setPopupText] = useState("Wrong Answer");
  useEffect(() => {
    axios
      .get(`${server_url}/api/puzzles/date/${today}`)
      .then((response) => {
        setPuzzle(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching puzzle :", error);
      });
  }, [server_url, today]);

  //return (<div></div>);
  if (!puzzle)
    return (
      <div>
        <Navbar />
        <Loading />
      </div>
    );
  //console.log(typeof puzzle.puzzle_code);


  const handleSubmit = () => {
    if(puzzle.solution === document.getElementById("answerId").value){
      setOpen(true);
      setPopupText("Correct Answer");
    }
    else{
      setOpen(true);
      setPopupText("Wrong Answer");
    }
  }
  const closeModal = () => {
    setOpen(false);
  }
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row P-3">
          <h1 className="text-center">Daily Puzzle</h1>
        </div>
        <div className="row">
          <Card>
            <Card.Body>{puzzle.problem}</Card.Body>
          </Card>
        </div>

        <div className="row">
          <CodeBlock
            text={puzzle.puzzle_code}
            language={puzzle.language}
            theme={dracula}
            wrapLongLines={true}
          />
        </div>
        <div className="row">
          <h3 className="text-center">Your Answer</h3>
        </div>

        <div className="row">
          <InputGroup className="mb-3">
            <Form.Control
              as="textarea"
              placeholder="Your answer"
              aria-label="Your answer"
              aria-describedby="basic-addon2"
              id="answerId"
            />
          </InputGroup>
        </div>
        <div className="row text-center justify-content-center">
          <div className="col-4">
            <Button
              size={"sm"}
              variant="outline-secondary"
              onClick={(e)=>handleSubmit()}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
      <Modal show={open} onHide={closeModal} centered>
      <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{popupText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </div>
  );
}
