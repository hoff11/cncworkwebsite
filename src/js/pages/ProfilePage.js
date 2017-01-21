import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';

export default class ProfilePage extends React.Component {
  static contextTypes = {
    user: React.PropTypes.object
  };
  constructor(props) {
      super(props);
      this.state = {value: 'coconut'};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('Change users status to: ' + this.state.value);
      event.preventDefault();
    }
  render() {
    let query = this.props.location.query;
    return (
      <DocumentTitle title={`My Profile`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>My Profile</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <h3><strong>Name:</strong>{this.context.user ? ' ' + this.context.user.givenName+' '+this.context.user.surname : null}</h3>
              <h4><strong>Expertise:</strong></h4>
              <p>Mill 3+ axis</p>
              <h4><strong>Years of Experience:</strong></h4>
              <p>Journeyman</p>
              <p>passed the test</p>
            </div>
            <div className="col-xs-12 col-sm-4">
              <form onSubmit={this.handleSubmit}>
                <label>
                  Currently LFW? NO 
                  <br /> 
                  <select value={this.state.value} onChange={this.handleChange}>
                    <option value="yes">YES</option>
                    <option value="no">NO</option>
                  </select>
                </label>
                <input type="submit" value="Submit" />
              </form>
              <div className="col-xs-12">
                <h4><strong>Bio:</strong></h4>
                <p>I have been programming CNC machines for over 5 years now.  I started in school using Mastercam for 3 axis mills.  Over my profesional career I have gained more knoweldge and completed more complex programs.  I am comfortable programming 3+ axis mills.  Surfaces, threads, grooves, slots, multi-axis,etc.  I have done a little lathe work but I prefer programming mills.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <br />
            <br />
            <hr />
            <div className="col-xs-12 text-center">
              <h2>Update Info Below</h2>
            </div>
            <div className="col-xs-12">
              <UserProfileForm>
                <div className='sp-update-profile-form'>
                  <div className="row">
                    <div className="col-xs-12">
                      <div className="form-horizontal">
                        <div className="form-group">
                          <label htmlFor="givenName" className="col-xs-12 col-sm-4 control-label">First name</label>
                          <div className="col-xs-12 col-sm-4">
                            <input type="text" className="form-control" id="givenName" name="givenName" placeholder="First name" required />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="surname" className="col-xs-12 col-sm-4 control-label">Last name</label>
                          <div className="col-xs-12 col-sm-4">
                            <input type="text" className="form-control" id="surname" name="surname" placeholder="Last name" required />
                          </div>
                        </div>
{/*                        {/*<div className="form-group">
                          <label htmlFor="email" className="col-xs-12 col-sm-4 control-label">Email</label>
                          <div className="col-xs-12 col-sm-4">
                            <input type="email" className="form-control" id="email" name="email" placeholder="Email" required />
                          </div>
                        </div>*/}
                        {/*<div className="form-group">
                          <label htmlFor="customData.color" className="col-xs-12 col-sm-4 control-label">Color</label>
                          <div className="col-xs-12 col-sm-4">
                            <input type="customData.color" className="form-control" id="customData.color" name="customData.color" placeholder="Color" />
                          </div>
                        </div>*/}
                        {/*<div className="form-group">
                          <label htmlFor="password" className="col-xs-12 col-sm-4 control-label">Password</label>
                          <div className="col-xs-12 col-sm-4">
                            <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
                          </div>
                        </div>*/}
                        <div key="update-button" className="form-group">
                          <div className="col-sm-offset-4 col-sm-4">
                            <p className="alert alert-danger" data-spIf="form.error"><span data-spBind="form.errorMessage" /></p>
                            <p className="alert alert-success" data-spIf="form.successful">Profile updated.</p>
                            <button type="submit" className="btn btn-primary">
                              <span data-spIf="!form.processing">Update</span>
                              <span data-spIf="form.processing">Updating...</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </UserProfileForm>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
