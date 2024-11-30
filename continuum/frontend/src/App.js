import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CoordinatorDashboard from './CoordinatorDashboard';
import ClinicDashboard from './ClinicDashboard';
import PatientDashboard from './PatientDashboard';
import PhysicianDashboard from './PhysicianDashboard';
import LoginPage from './LoginPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/coordinator" component={CoordinatorDashboard} />
          <Route path="/clinic" component={ClinicDashboard} />
          <Route path="/patient" component={PatientDashboard} />
          <Route path="/physician" component={PhysicianDashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
