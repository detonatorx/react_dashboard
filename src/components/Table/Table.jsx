import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyle } from '../../helpers/makeStyle';
import './Table.css'

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const timeElapsed = Date.now();
let today = new Date(timeElapsed);
const day = today.getDate();
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const month = monthNames[today.getMonth()];

const rows = [
  createData('Frozen yoghurt', 159, `${month}, ${day}`, 'Pending', 4.0),
  createData('Ice cream sandwich', 237, `${month}, ${day}`, 'Pending', 4.3),
  createData('Eclair', 262, `${month}, ${day}`, 'Approved', 6.0),
  createData('Cupcake', 305, `${month}, ${day}`, 'Delivered', 4.3),
  createData('Gingerbread', 356, `${month}, ${day}`, 'Approved', 3.9),
];

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Recent Orders</h3>

      <TableContainer
        component={Paper}
        style={{ boxShadow: '0px 13px 20px 0px #80808029' }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Produce</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell align="left" className='details'>Detail</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
