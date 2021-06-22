import React from 'react';
import Container from '@material-ui/core/Container';
// import ProgressPayment from '../../components/ProgressPayment';
import PaymentHeader from '../../containers/PaymentHeader';
import PaymentInfo from '../../containers/PaymentsInfo';
import Grid from '@material-ui/core/Grid';
import PaymentList from '../../components/PaymentList';
import '../../styles/pages/Dashboard/Payments.css';

const Payments = () => {
  return (
    <section>
      <Container maxWidth='lg'>
        <Grid container spacing={5}>
          <Grid item lg={12} md={12} xs={12}>
            <PaymentHeader />
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <PaymentInfo />
          </Grid>
          <Grid item container lg={12} md={12} xs={12}>
            <Grid item lg={6} md={6} xs={12}>
              <PaymentList paid />
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <PaymentList />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <a
        href='https://wa.me/?text=Me%20gustaría%20saber%20más%20sobre%20mi%20proyecto'
        className='whatsapp'
        target='_blank'
      >
        {' '}
        <i className='fa fa-whatsapp whatsapp-icon'></i>
      </a>
    </section>
  );
};

export default Payments;
