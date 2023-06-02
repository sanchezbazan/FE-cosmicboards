import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import RegistrationForm from './registration';
import Login from './login';
import UserDetail from './userDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/accounts/registration/" component={RegistrationForm} />
        <Route exact path="/accounts/login/" component={Login} />
        <Route path="/api/v1/users/portal/" component={UserDetail} />
      </Switch>
    </Router>
  );
}; 

export default App;
