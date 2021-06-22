import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const createData = (name, description, score, commets) => {
  return { name, description, score, commets };
};

const lorem =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
const lorem2 = 'Todos me la pelan';

const rows = [
  createData('Juan Perez', lorem, 4.5, lorem2),
  createData('Susana Perez', lorem, 4.0, lorem2),
  createData('Pepito Perez', lorem, 3.2, lorem2),
  createData('Maria Perez', lorem, 4.7, lorem2),
  createData('Pancho Perez', lorem, 3.5, lorem2),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const ProgressTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Responsable</StyledTableCell>
            <StyledTableCell>Descripción</StyledTableCell>
            <StyledTableCell>Comentarios</StyledTableCell>
            <StyledTableCell align='right'>Calificación</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component='th' scope='row'>
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.description}</StyledTableCell>
              <StyledTableCell>{row.commets}</StyledTableCell>
              <StyledTableCell align='right'>
                {row.score >= 1 ? (
                  <StarIcon color='primary' />
                ) : row.score >= 0.5 ? (
                  <StarHalfIcon color='primary' />
                ) : (
                  <StarBorderIcon color='primary' />
                )}
                {row.score >= 2 ? (
                  <StarIcon color='primary' />
                ) : row.score >= 1.5 ? (
                  <StarHalfIcon color='primary' />
                ) : (
                  <StarBorderIcon color='primary' />
                )}
                {row.score >= 3 ? (
                  <StarIcon color='primary' />
                ) : row.score >= 2.5 ? (
                  <StarHalfIcon color='primary' />
                ) : (
                  <StarBorderIcon color='primary' />
                )}
                {row.score >= 4 ? (
                  <StarIcon color='primary' />
                ) : row.score >= 3.5 ? (
                  <StarHalfIcon color='primary' />
                ) : (
                  <StarBorderIcon color='primary' />
                )}
                {row.score === 5 ? (
                  <StarIcon />
                ) : row.score >= 4.5 ? (
                  <StarHalfIcon color='primary' />
                ) : (
                  <StarBorderIcon color='primary' />
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProgressTable;
