import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ProgressPayment from '../components/ProgressPayment';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const PaymentHeader = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h5' component='h2'>
          Valor pagado
        </Typography>
        <Box m={1}>
          <ProgressPayment valu />
        </Box>
        <Box display='flex' justifyContent='space-between' m={1}>
          <Typography>Pagado: $500,000</Typography>
          <Typography>Total: $1,000,000</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PaymentHeader;
