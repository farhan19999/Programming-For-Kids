import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader
} from 'react-bs-datatable';
import { Col, Row, Table } from 'react-bootstrap';
import Loading from '../../components/loading/Loading';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import MiniProjectNavbar from '../../components/mini_project_navbar/MiniProjectNavbar';
import Footer from '../../components/footer/Footer';



const header = [
  { title: 'Last Updated', prop: 'submitted_time' },
  { title: 'Score', prop: 'score' },
];



// Then, use it in a component.
export default function MiniProjectSubmissionTable() {
  const { userid, loggedIn, role } = useSelector((state) => state.user);
  const {projectid} = useParams();
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState(null);
  const server_url = process.env.REACT_APP_SERVER_URL;
  useEffect(() => {
    if(!loggedIn || role !== "user") return;
    axios.get(`${server_url}/api/mini-projects/${projectid}/submissions/${userid}`)
    .then((res) => {
      let sub = res.data;
      sub.submitted_time = new Date(sub.submitted_time).toLocaleString();
      setSubmissions([sub]);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [server_url, projectid, userid, loggedIn, role]);

  if(!loggedIn || role !== "user"){
    navigate("/signin")
  }
  if (!submissions) return (<Loading/>);

  return (
    <>
    <Navbar />
    <MiniProjectNavbar projectid={projectid}/>
    <div className="container" style={{ marginTop: "20px" }}>
        <DatatableWrapper body={submissions} headers={header}>
            <Row className="mb-4">
                <Col
                    xs={12}
                    lg={4}
                    className="d-flex flex-col justify-content-end align-items-end"
                >
                    {/* <Filter /> */}
                </Col>
                <Col
                    xs={12}
                    sm={6}
                    lg={4}
                    className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
                >
                    {/* <PaginationOptions controlledProps={{rowsPerPage:5}} /> */}
                </Col>
                <Col
                    xs={12}
                    sm={6}
                    lg={4}
                    className="d-flex flex-col justify-content-end align-items-end"
                >
                    {/* <Pagination /> */}
                </Col>
            </Row>
            <Table>
                <TableHeader />
                <TableBody />
            </Table>
        </DatatableWrapper>
    </div>
    <Footer />
</>
  );
}

