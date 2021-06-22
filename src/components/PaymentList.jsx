import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const PaymentList = ({ paid }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Card>
      <List
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader component='div' id='nested-list-subheader'>
            {paid ? 'Pagos realizados' : 'Pagos por realizar'}
          </ListSubheader>
        }
        className={classes.root}
      >
        <ListItem button>
          <ListItemIcon>
            {paid ? (
              <DoneAllIcon color='primary' />
            ) : (
              <ScheduleIcon color='secondary' />
            )}
          </ListItemIcon>
          <ListItemText primary='01/01/2021 - $25,000' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            {paid ? (
              <DoneAllIcon color='primary' />
            ) : (
              <ScheduleIcon color='secondary' />
            )}
          </ListItemIcon>
          <ListItemText primary='01/02/2021 - $25,000' />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            {paid ? (
              <DoneAllIcon color='primary' />
            ) : (
              <ScheduleIcon color='secondary' />
            )}
          </ListItemIcon>
          <ListItemText primary='01/03/2021 - $25,000' />
        </ListItem>
      </List>
    </Card>
  );
};

export default PaymentList;
