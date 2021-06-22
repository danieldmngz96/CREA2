import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import ProgressPayment2 from '../components/ProgressPayment2';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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

const PaymentInfo = () => {
  const classes = useStyles();

  return (
    <Grid container justyfy='center' spacing={2}>
      <Grid item lg={6} md={6} xs={12}>
        <Card className={classes.root} variant='outlined'>
          <CardContent>
            <Typography variant='h5' component='h2'>
              Ultimo pago
            </Typography>
            <Box m={1}>
              <ProgressPayment2 value={100} />
            </Box>
            <Box display='flex' justifyContent='space-between' m={1}>
              <Typography component='p'>A pagar: $25,000</Typography>
              <Typography component='p'>Fecha: 1/04/2021</Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Button size='small'>Factura</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item lg={6} md={6} xs={12}>
        <Card className={classes.root} variant='outlined'>
          <CardContent>
            <Typography variant='h5' component='h2'>
              Proximo pago
            </Typography>
            <Box m={1}>
              <ProgressPayment2 value={10} />
            </Box>
            <Box display='flex' justifyContent='space-between' m={1}>
              <Typography component='p'>Pagado: $25,000</Typography>
              <Typography component='p'>Fecha: 1/05/2021</Typography>
            </Box>
          </CardContent>
          <Box display='flex' justifyContent='flex-end'>
            <CardActions>
              <Button size='small' color='secondary'>Pagar</Button>
            </CardActions>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PaymentInfo;
