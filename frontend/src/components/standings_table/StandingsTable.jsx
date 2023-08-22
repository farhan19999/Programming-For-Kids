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


const header = [
  { title: 'Username', prop: 'username' },
  { title: 'A', prop: 'A' },
  { title: 'B', prop: 'B' },
  { title: 'C', prop: 'C' },
  { title: 'D', prop: 'D' },
  { title: 'E', prop: 'E' },
];



// Then, use it in a component.
export default function StandingsTable({contestid}) {

  const [standings, setStandings] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/contests/${contestid}/standings`).then((res) => {
      setStandings(res.data);
    });
  },[contestid]);

  return (
    <DatatableWrapper body={standings} headers={header}>
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
