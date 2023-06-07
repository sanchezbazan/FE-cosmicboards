import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import RegistrationForm from './registration';
import Login from './login';
import UserDetail from './userDetail';
import PasswordResetRequest from './PasswordResetRequest';
import PasswordResetConfirm from './PasswordConfirm';
import EmailVerification from './EmailVerification';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/account/registration/" component={RegistrationForm} />
        <Route exact path="/account/login/" component={Login} />
        <Route path="/portal/overview/" component={UserDetail} />
        
        <Route exact path="/account/password/reset/" component={PasswordResetRequest} />
      <Route 
        path="/account/password/reset/confirm/:uid/:token"
        render={({ match }) => 
          <PasswordResetConfirm uid={match.params.uid} token={match.params.token} />
        }
        />
        <Route path="/account/registration/verify-email/:key" component={EmailVerification} />

      </Switch>
    </Router>
  );
}; 

export default App;
