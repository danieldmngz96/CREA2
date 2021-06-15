import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';

const LinearProgressWithLabel = ({ value }) => {
  return (
    <Box display='flex' alignItems='center'>
      <Box width='100%' mr={1}>
        <LinearProgress variant='determinate' value={value} />
      </Box>
      <Box minWidth={35}>
        <Typography variant='body2' color='textSecondary'>{`${Math.round(
          value
        )}%`}</Typography>
      </Box>
    </Box>
  );
};

const ProgressCard = ({ title, subtitle, description, progress }) => {
  return (
    <Card className='' variant="outlined">
      <CardContent>
        <Typography className='' color='textSecondary' gutterBottom>
          {subtitle}
        </Typography>
        <Typography variant='h5' component='h2'>
          {title}
        </Typography>
        <Typography className='' color='textSecondary'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <div style={{ width: '100%' }}>
          <LinearProgressWithLabel value={progress} />
        </div>
        {/* <Button size='small'>Learn More</Button> */}
      </CardActions>
    </Card>
  );
};

const Progress = () => {
  return (
    <Container maxWidth='lg'>
      <Grid container justyfy='center' spacing={2}>
        <Grid item lg={3} md={6} xs={12}>
          <ProgressCard
            progress={50}
            subtitle='Dominio'
            title='www.tu-dominio.com'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit'
          />
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <ProgressCard
            progress={20}
            subtitle='Host'
            title='www.tu-dominio.com'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit'
          />
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <ProgressCard
            progress={30}
            subtitle='Pagina WEB'
            title='www.tu-dominio.com'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit'
          />
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <ProgressCard
            progress={70}
            subtitle='Backend'
            title='www.tu-dominio.com'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit'
          />
        </Grid>
      </Grid>
      <a href="https://wa.me/?text=Me%20gustaría%20saber%20más%20sobre%20mi%20proyecto" class="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
    </Container>
  );
};

export default Progress;
