import React from 'react';

import '../../src/styles/components/RegistrationCard.css';
//import confLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar';
import Logo from'../../src/assets/logo.png';

class RegistrationCard extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={Logo} alt="Logo" className="Header__Card" />
        </div>

        <div className="Badge__section-name">
          <Gravatar className="Badge__avatar" email={this.props.email} />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">#WelcomeCrea</div>
      </div>
    );
  }
}

export default RegistrationCard;
