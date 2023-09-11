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
import Loading from '../loading/Loading';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const header = [
  { title: 'Problem', prop: 'title' },
  { title: 'Submitted Time', prop: 'submitted_time' },
  { title: 'Language', prop: 'language' },
  { title: 'Status', prop: 'status' },
//   { title: 'Details', prop: 'details' }
];



// Then, use it in a component.
export default function PracticeSubmissionTable() {
  const {userid,loggedIn, role} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState([]);
  const server_url = process.env.REACT_APP_SERVER_URL;
  useEffect(() => {
    if(!loggedIn || !userid || role !== "user") return;
    axios.get(`${server_url}/api/users/${userid}/practice-submissions`)
    .then((res) => {
        console.log(res.data);
        const s = res.data.submissions;
        s.forEach((submission) => {
            submission.submitted_time = new Date(submission.submitted_time).toLocaleString();
        });
        setSubmissions(s);
    })
    .catch((err) => {
        console.error(err);
    });
  }, [server_url,loggedIn,userid,role]);

  if(!loggedIn || !userid || role !== "user") {
        navigate("/signin");
  }

  if (!submissions) {
    return (
      <>
        <Loading />
      </>
    );
  };

  return (
    <DatatableWrapper body={submissions} headers={header}>
      <Row className="mb-4">
        <Col
          xs={12}
          lg={4}
          className="d-flex flex-col justify-content-end align-items-end"
        >
          <Filter />
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={4}
          className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
        >
          <PaginationOptions />
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={4}
          className="d-flex flex-col justify-content-end align-items-end"
        >
          <Pagination />
        </Col>
      </Row>
      <Table>
        <TableHeader />
        <TableBody />
      </Table>
    </DatatableWrapper>
  );
}

