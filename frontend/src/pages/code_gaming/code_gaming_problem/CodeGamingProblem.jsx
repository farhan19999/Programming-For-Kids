import { useEffect, useState } from "react";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import { getBytes, ref } from "firebase/storage";
import storage from "../../../utils/firebase";
import Loading from "../../../components/loading/Loading";
import AceEditor from "react-ace";
import { useParams } from "react-router-dom";

export default function CodeGamingProblem() {
    const { codegameid } = useParams();
    const [script, setScript] = useState(null);
    const [codegame, setCodeGame] = useState(null);
    const server_url = process.env.REACT_APP_SERVER_URL;
    useEffect(() => {
        if(!codegameid) return;
        axios.get(`${server_url}/api/gaming/${codegameid}`).then((res) => {
            setCodeGame(res.data);
            const r = ref(storage, `/games/${res.data.game_script}`);
            getBytes(r)
                .then((res) => {
                    const decoder = new TextDecoder('utf-8');
                    setScript(decoder.decode(res));
                    let s = document.getElementById("game_script");
                    if (!s) {
                        s = document.createElement("script");
                        s.id = "game_script";
                        s.type = "text/javascript";
                        s.async = true;
                        if (document.getElementById("game")) document.body.appendChild(s);
                    }
                    s.innerHTML = decoder.decode(res);
                })
                .catch((err) => {
                    console.log(err);
                })
            // axios.get(`${server_url}/api/code-gaming-problems/${problemid}`).then((res) => {
            //     setScript(res.data.script);
            // });
            });
        }, [server_url, codegameid]);
        if (!codegame) return (<Loading />);

        const handleCodeChange = (newCode) => {};

        return (
            <>
                <Navbar />
                <div className="container" style={{ marginTop: "20px" }}>
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{codegame.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Problem Statement</h6>
                                    <p className="card-text"><pre>{codegame.problem}</pre>
                                    </p>
                                    <h6 className="card-subtitle mb-2 text-muted">Sample Input</h6>
                                    <p className="card-text break-word"><pre>{codegame.sample_input}</pre>
                                    </p>
                                    <h6 className="card-subtitle mb-2 text-muted">Sample Output</h6>
                                    <p className="card-text">{codegame.sample_output}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">PlayGround</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Write your code here</h6>
                                    <div>
                                        <div style={editorHeaderStyle}>
                                            <div style={editorTitleStyle}>Editor:</div>
                                            <div style={languageSelectContainerStyle}>
                                                <label htmlFor="languageSelect">Select Language:</label>
                                                <select
                                                    value="c_cpp"
                                                >
                                                    <option value={"c_cpp"}>C</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div style={editorContainerStyle}>
                                            <div style={editorStyle}>
                                                <AceEditor
                                                    mode={"c_cpp"}
                                                    theme="monokai"
                                                    width="300%"
                                                    height="396px"
                                                    fontSize={14}
                                                    fontColor="#666"
                                                    style={{ backgroundColor: "#555" }} //  background color
                                                    onChange={handleCodeChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">

                        <div className="col-12 col-lg-8" id="game">

                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

// const statusBoxStyle = {
//     marginTop: "10px",
//     display: "flex",
//     alignItems: "center",
//     color: "#333",
//     marginBottom: "20px",
// };

// const submitButtonContainerStyle = {
//     display: "flex",
//     justifyContent: "flex-start", // Align button to the right
//     marginTop: "10px",
// };

const editorContainerStyle = {
    display: "flex",
    justifyContent: "flex-right", // Place editor on the right side
    marginTop: "2px", // Adjust as needed for spacing
    width: "32.6%",
    flexDirection: "column",
};

const editorHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
};

const languageSelectContainerStyle = {
    display: "flex",
    alignItems: "center",
    marginRight: "18px", // Add some spacing between the label and select
};

const editorTitleStyle = {
    fontWeight: "bold",
};

const editorStyle = {
    flex: "1 1 auto", // Allow to grow and shrink, take remaining space
};