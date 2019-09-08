import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(name, rate, low, medium, high) {
  return { name, rate, low, medium };
}

const rows = [
  createData('Accommodation and Food Services', '35.14%', '$65,000-$400,000', '$400,001-$750,000', '750,000+'),
  createData('Agriculture, Forestry, Fishing', '36.84%', '$65,000-$500,000','$500,001-$1,000,000', '$1,000,000+'),
  createData('Construction', '45.82%', '$50,000-$200', '$200,001-$500,000'),
  createData('Education and Training', '35.53%', '$50,000-$300,000',	'$300,001-$800,000'),
  createData('Health Care and Social Assistance', '43.08%', '$65,000-$200,000', '$200,001-$600,000'),
  createData('Manufacturing', '39.55%', 'Machinery', '$50,000-$200,000', '$200,001-$600,000'),
  //createData('Retail Trade', '34.89%', '$65,000-$250,000', '$250,001-$600,000'),
  //createData('Transport, Postal and Warehousing', '38.10%', '$50,000-$150,000', '$150,001-$300,000'),
  //createData('Wholesale Trade', '51.35%', '$65,000-$400,000', '$400,001-$1,000,000')
];


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  table: {
    minWidth: 500,
  },
}));

export default function Quad3() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} style={{ overflowY: 'scroll' }}>
      <h2>Indicators of Success</h2>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Industry</StyledTableCell>
            <StyledTableCell>Success Rate</StyledTableCell>
            <StyledTableCell align="right">Low</StyledTableCell>
            <StyledTableCell align="right">Medium&nbsp;(g)</StyledTableCell>
            {/* <StyledTableCell align="right">High&nbsp;(g)</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.rate}</StyledTableCell>
              <StyledTableCell align="right">{row.low}</StyledTableCell>
              <StyledTableCell align="right">{row.medium}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.high}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}