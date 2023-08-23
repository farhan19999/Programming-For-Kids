//Author: MAHBUB
import React, { useEffect, useState } from 'react';

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { CodeBlock, dracula } from "react-code-blocks"
import  Card  from 'react-bootstrap/Card';
import axios from 'axios';
import moment from 'moment';
import Loading from '../../components/loading/Loading';

export default function DailyPuzzle() {
    const [puzzle, setPuzzle] = useState([]);
    const server_url = process.env.REACT_APP_SERVER_URL;
    const todaywithzone = new Date();
    const today = moment(todaywithzone).format('YYYY-MM-DD');

    useEffect(() => {
        axios.get(`${server_url}/api/puzzles/${today}`).then(response => {
            setPuzzle(response.data);
            console.log(response.data);
        }).catch(error => {
            console.error('Error fetching puzzle :', error);
        });
    }, [server_url, today]);

    if(!puzzle) return (<Loading />);

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <h1 className="text-center">Daily Puzzle</h1>

                </div>
                <div className="row">
                    <Card>
                        <Card.Body>
                            {puzzle.problem}
                        </Card.Body>
                    </Card>
                </div>

                <div className="row">
                    <CodeBlock text={puzzle.puzzle_code} language={puzzle.language} theme={dracula} />
                </div>
                
            </div>
            <Footer />
        </div>);
}
