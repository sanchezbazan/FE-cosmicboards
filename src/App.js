import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import RegistrationForm from './registration';
import Login from './login';
import UserDetail from './userDetail';
import PasswordReset from './PasswordReset';
import PasswordConfirm from './PasswordConfirm';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/account/registration/" component={RegistrationForm} />
        <Route exact path="/account/login/" component={Login} />
        <Route path="/account/overview/" component={UserDetail} />
        <Route path="/account/password/reset/" component={PasswordReset} />
        <Route path="/account/password/confirm/" component={PasswordConfirm} />
      </Switch>
    </Router>
  );
}; 

export default App;
