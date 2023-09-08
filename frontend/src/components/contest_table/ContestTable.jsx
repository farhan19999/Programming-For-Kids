import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../loading/Loading';
import moment from 'moment';
import { Link } from 'react-router-dom';


const columns = [
    {
        id: 'title',
        label: 'Title',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'div',
        label: 'Div',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'start_time',
        label: 'Start Time',
        minWidth: 170,
        align: 'center',
        format: (value) => moment(value).format('MMMM Do YYYY, h:mm:ss a'),
    },
    {
        id: 'duration',
        label: 'Duration',
        minWidth: 170,
        align: 'center',
    }

]




export default function ContestTable() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [contests, setContests] = useState(null);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const server_url = process.env.REACT_APP_SERVER_URL;
    useEffect(() => {
        axios.get(`${server_url}/api/contests`)
            .then((response) => {
                setContests(response.data.contests);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [server_url]);

    if(!contests) return (<Loading />);
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contests
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.contestid} component={Link} to={`/contest/${row.contestid}`}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'string'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={contests.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
