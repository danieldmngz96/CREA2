import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  primaryTail: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const first__delivery = "01/22/2021";
const second__delivery = "03/14/2021";
const third__delivery = "05/05/2021";
const fourth__delivery = "08/12/2021";

const first__pay = "100 USD";
const second__pay = "200 USD";
const third__pay = "500 USD";
const fourth__pay = "300 USD";

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            {fourth__delivery}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot >
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Entrega Final 👨🏼‍💻
            </Typography>
            <Typography>Felicitaciones tienes tu proyecto finalizado.</Typography>
            <Typography variant="body2" color="textSecondary">
            {fourth__delivery} <br/>
            {fourth__pay}
             </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            {third__delivery}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot >
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Segunda Entrega 💻
            </Typography>
            <Typography>Comienzo del responsive y CRUD.</Typography>
            <Typography variant="body2" color="textSecondary">
            {third__delivery} <br/>
            {third__pay}
             </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" >
          <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector className={classes.primaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            🖥 Primera Entrega 💻
            </Typography>
            <Typography>Elaboracion de diseño web y maquetacion del sitio.</Typography>
            <Typography variant="body2" color="textSecondary">
            {second__delivery} <br/>
            {second__pay}
             </Typography>
          </Paper>
         
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <RepeatIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Comienzo del proyecto 🎉
            </Typography>
            <Typography>Definir DevOps, lenguajes, documentación.</Typography>
            <Typography variant="body2" color="textSecondary">
            {first__delivery} <br/>
            {first__pay}
             </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}