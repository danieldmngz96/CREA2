import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/components/RegistryInputs.css'
class RegistryInputs extends React.Component {
  handleClick = e => {
    console.log('Button was clicked');
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>Nombres :</label>
            <input
              onChange={this.props.onChange}
              className="form-control input"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label>Apellidos:</label>
            <input
              onChange={this.props.onChange}
              className="form-control input"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control input"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Puesto o Cargo:</label>
            <input
              onChange={this.props.onChange}
              className="form-control input"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group ">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control input"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>

         {/* <button onClick={this.handleClick} className="btn btn-primary mt-4">
            Siguiente
    </button>*/}

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default RegistryInputs;
