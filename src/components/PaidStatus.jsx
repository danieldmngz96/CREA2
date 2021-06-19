import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SimpleAlerts() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="error">NO SE HA REALIZADO EL PAGO. — check it out!</Alert>
      {/*<Alert severity="warning">Esta en proceso! — check it out!</Alert> */}  
      {/*<Alert severity="info">En breve nos comunicaremos contigo </Alert>*/}  
      {/*<Alert severity="success">Todo esta al dia.</Alert>*/}  
    </div>
  );
}