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
import SubNavbarPracticeProblem from '../sub_navbar_practice_problem/SubNavbarPracticeProblem';


const header = [
  { title: 'Problem', prop: 'title' },
  { title: 'Submitted Time', prop: 'submitted_time' },
  { title: 'Language', prop: 'language' },
  { title: 'Status', prop: 'status' },
  { title: 'Details', prop: 'details' }
];



// Then, use it in a component.
export default function SubmissionTable({ contestid, userid }) {

  const [submissions, setSubmissions] = useState(null);
  const server_url = process.env.REACT_APP_SERVER_URL;
  useEffect(() => {
    axios.get(`${server_url}/api/contests/${contestid}/submissions/?userid=${userid}`).then((res) => {
      setSubmissions(res.data);
    });
  }, [server_url, contestid, userid]);

  if (!submissions) {
    return (
      <>
        <Navbar />
        <Loading />
        <Footer />
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

