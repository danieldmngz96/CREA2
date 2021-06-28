import React from 'react';
//import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import '../../styles/pages/Registry/RegistrationForm.css';	
import RegistrationCard from '../../components/RegistrationCard';
import PageLoading from '../../components/PageLoading';
import RegistryInputs from '../../components/RegistryInputs';
import Stepper2 from '../../components/Stepper2';
import api from '../../../api';


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
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
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
    <div className="main_From">
    <React.Fragment>
    <div className="RegistrationForm__hero">
    <RegistrationCard
                firstName={this.state.form.firstName || 'NOMBRES'}
                lastName={this.state.form.lastName || 'APELLIDOS'}
                twitter={this.state.form.twitter || 'twitter'}
                jobTitle={this.state.form.jobTitle || 'Me dedico a...'}
                email={this.state.form.email || 'Correo'}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
          </div>
          <div className="Registry__Inputs">
            <h2 className="title__New--Registry">📋Nuevo Registro💎</h2>
          <RegistryInputs
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
              <Stepper2></Stepper2>
          </div>
        </React.Fragment>
        </div>
      </>
    
    );
  }
 }
export default RegistrationForm;