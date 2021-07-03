import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/pages/Registry/RegistryList.css';
import Logo from '../../assets/logo.png';
import Stepper3 from '../../components/Stepper3';
//import List from '../../components/List';
import PageLoading from '../../components/PageLoading';
import PageError from '../../components/PageError';
import MiniLoader from '../../components/MiniLoader';
import api from '../../../api';

class RegistryList extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  render() {
    /*if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }*/
    return (
      
       <React.Fragment>
        <div className="Badges">
          <div className="Head__hero">
            <div className="RegistryList__container">
              <img
                className="Badges_conf-logo"
                src={Logo}
                alt="Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/RegistrationForm" className="btn btn-primary">
              Nuevo Registro
            </Link>
          </div>
          <Stepper3></Stepper3>
         {/*<List RegistryList={this.state.data} />*/} 
         {this.state.loading && <MiniLoader />}
        </div>
          </React.Fragment>
    );
  }
}
export default RegistryList;
