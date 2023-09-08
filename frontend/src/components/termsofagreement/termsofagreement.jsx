//Author: MAHBUB
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


function ShowTermsOfAgreements({ userid, contestid }) {

    const navigate = useNavigate(); // Initialize useNavigate
    userid = 1;
    const server_url = process.env.REACT_APP_SERVER_URL;
    const handleRegisterButton = () => {
        axios.post(`${server_url}/api/users/${userid}/registered-contests`,
            {
                userid: userid,
                contestid: contestid,
            })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        navigate(`/user/${userid}/contests/`);

    }
    return (

        <div className="row" style={{ width: '50%', padding: '10px', textAlign: 'center', borderRadius: '8px', background: '#eee',marginLeft:'25%',fontSize:'18px',marginTop:'15px' }}>
            <div >Terms of Agreements:</div>
            <div className="d-flex justify-content-center align-items-center shadow-sm p-3 mb-5 bg-body-tertiary rounded" style={{marginTop:'10px'}} >
                Do not copy
                <br />
                Please submit on time
                <br />
                Do not search on chatgpt
            </div>
            {/* <button className="btn btn-dark ml-auto rounded-pill px-2 py-2" onClick={() => handleRegisterButton()} style={{ width: '100px' }} type="button">Register Now</button> */}
            <button
                type="button"
                className="btn btn-dark"
                style={{
                    position: "relative",
                    bottom: "0px",
                    right: "0",
                    marginRight: "0px",
                    width: "150px",
                    marginLeft: "40%",
                    marginTop: "0px",
                    borderRadius: "20px",
                }}
                onClick={()=>handleRegisterButton()}
            >
                Register Now
            </button>
        </div>
    );
};

export default ShowTermsOfAgreements;
