import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { Router, Route } from 'react-router';
import CoordinatorDashboard from './components/CoordinatorDashboard';
import ClinicDashboard from './components/ClinicDashboard';
import PatientDashboard from './components/PatientDashboard';
import PhysicianDashboard from './components/PhysicianDashboard';
import LoginPage from './components/LoginPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
          <Route path="/login" component={LoginPage} />
          <Route path="/coordinator" component={CoordinatorDashboard} />
          <Route path="/clinic" component={ClinicDashboard} />
          <Route path="/patient" component={PatientDashboard} />
          <Route path="/physician" component={PhysicianDashboard} />
      </div>
    </Router>
  );
}

export default App;
