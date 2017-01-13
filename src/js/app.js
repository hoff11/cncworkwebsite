import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory } from 'react-router';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import { ChangePasswordPage, MasterPage, IndexPage, LoginPage, RegisterPage, ResetPasswordPage, VerifyEmailPage, ProfilePage, JobPage, ShopPage, RegisterOptionsPage } from './pages';

ReactStormpath.init();

ReactDOM.render(
  <Router history={browserHistory}>
    <HomeRoute path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
      <LoginRoute path='/login' component={LoginPage} />
      <Route path='/verify' component={VerifyEmailPage} />
      <Route path='/register' component={RegisterPage} />
      <Route path='/registeroptions' component={RegisterOptionsPage} />
      <Route path='/change' component={ChangePasswordPage} />
      <Route path='/forgot' component={ResetPasswordPage} />
      <AuthenticatedRoute>
        <Route path='/profile' component={ProfilePage} />
        <Route path='/jobs' component={JobPage} />
        <Route path='/shops' component={ShopPage} />
      </AuthenticatedRoute>
    </HomeRoute>
  </Router>,
  document.getElementById('app-container')
);