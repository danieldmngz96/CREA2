import React from 'react';

import '../../src/styles/components/RegistrationCard.css';
//import confLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar';

class RegistrationCard extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src="../../src/assets/logo.png" alt="Logo" />
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
