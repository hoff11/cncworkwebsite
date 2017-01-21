import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Authenticated, NotAuthenticated, LoginLink } from 'react-stormpath';

export default class IndexPage extends React.Component {
  static contextTypes = {
    user: React.PropTypes.object
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h2 className="text-uppercase">
              Welcome
              { this.context.user ? ' ' + this.context.user.givenName : null }!
            </h2>
          </div>
          <NotAuthenticated>
            <div className="col-md-9">
              <p>Thanks for stopping by.  If you are coming from <a target="_blank" href="http://fb.com/machinisttalk">Machinist Talk</a> and are you are expecting pictures, sorry that isn't what we have going on here.  If you have been redirected from somewhere else, glad you made it.  This website was built to get work done, in particular <abbr title="CNC programming is art and science combined.">CNC programming</abbr>.</p>
            </div>
          </NotAuthenticated>
          <Authenticated>
            <div className="col-md-9">
              <p>Some of the users stats</p>
            </div>
          </Authenticated>
        </div>
        <hr />
        <div className="jumbotron">
          <div className="row">
            <div className="col-md-8">
              <p>
                <strong>PROGRAMMING JOBS</strong>
              </p>
              <ol className="lead">
                <li><Link to="#">2 Axis | Lathe | Prototrack</Link></li>
                <li><Link to="#">3 Axis | Mill | Haas | Kurt Vise</Link></li>
                <li><Link to="#">Multi Axis | Mill | Mori Seki | Kurt Vise</Link></li>
                <li><Link to="#">G-Code | Mill | Haas | Kurt Vise</Link></li>
                <li><Link to="#">2 Axis | Lathe | Okuma</Link></li>
              </ol>
              <hr />
              <p>
                <strong>Are you a programmer?</strong>
              </p>
              <ol className="lead">
                <li><Link to="#">LFW | Chris | Journeyman | Mill, Lathe, Multi Axis, Multi Spindle</Link></li>
                <li><Link to="#">LFW | Mike | Greenhorn | Mill</Link></li>
                <li><Link to="#">Busy | Tom | Mid Level | Mill, Lathe</Link></li>
              </ol>
            </div>
            <div className="col-md-4">Something.</div>
          </div>
          {/*<ol className="lead">
            <NotAuthenticated>
              <li><Link to="/register">Registration</Link></li>
              <li><LoginLink /></li>
              <li><Link to="/forgot">Forgot Password</Link></li>
            </NotAuthenticated>
            <Authenticated>
              <li><Link to="/profile">Custom Profile Data</Link></li>
              <li><Link to="/jobs">Jobs Page</Link></li>
              <li><Link to="/shops">Shops Page</Link></li>
            </Authenticated>
          </ol>*/}
        </div>
      </div>
    );
  }
}
