import { Link } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CodeGamingList() {
    const [games, setGames] = useState([]);
    const server_url = process.env.REACT_APP_SERVER_URL;
    useEffect(() => {
        axios.get(`${server_url}/api/gaming`).then((res) => {
            setGames(res.data);
        });
    }, [server_url]);

    return (
        <>
            <Navbar />
            <div className="container" style={{ marginTop: "20px" }}>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">CodeGamingList</h5>
                                <h6 className="card-subtitle mb-2 text-muted">List of CodeGaming</h6>
                                {games.map((game) => (
                                    <div className="card" key={game.codegameid}>
                                        <Link to={`/code-gaming/${game.codegameid}`}>
                                            <p className="card-text">{game.title}</p></Link>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}