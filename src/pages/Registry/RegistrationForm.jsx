import React from 'react';
//import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import '../../styles/pages/Registry/RegistrationForm.css';	
import RegistrationCard from '../../components/RegistrationCard';
import PageLoading from '../../components/PageLoading';
class RegistrationForm extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
  return (
      <>
    <section className='BackgroundForm__hero'>
      <h1 className="title__Welcome">Bienvenido</h1>
    </section>

    <div>
        <h2 className="title__Next">Ahora llena el siguiente formulario:</h2>
    </div> 
    <React.Fragment>
    <div className="RegistrationForm__hero">
    <RegistrationCard
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                twitter={this.state.form.twitter || 'twitter'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                email={this.state.form.email || 'EMAIL'}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
          </div>
        </React.Fragment>
      </>
    
    );
  }
 }
export default RegistrationForm;